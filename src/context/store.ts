import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// Reducers
import configReducer from './slices/configSlice'
import appReducer from './slices/appSlice'
import { geoApi } from './api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const reducers = combineReducers({
  config: configReducer,
  app_state: appReducer,
  [geoApi.reducerPath]: geoApi.reducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducers = persistReducer(persistConfig, reducers)
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(geoApi.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export default store
