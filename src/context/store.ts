import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// Reducers
import configReducer from './slices/configSlice'
import appReducer from './slices/appSlice'

const reducers = combineReducers({
  config: configReducer,
  app_state: appReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducers = persistReducer(persistConfig, reducers)
const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export default store
