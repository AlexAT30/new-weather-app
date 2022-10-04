import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// Reducers
import configReducer from './slices/configSlice'
import appReducer from './slices/appSlice'
import { weatherApi } from './api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const reducers = combineReducers({
  config: configReducer,
  app_state: appReducer,
  [weatherApi.reducerPath]: weatherApi.reducer
})

export const REDUX_KEY = 'weather-app-v1'
const persistConfig = {
  key: REDUX_KEY,
  storage
}

const persistedReducers = persistReducer(persistConfig, reducers)
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(weatherApi.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export default store
