import { configureStore } from '@reduxjs/toolkit'
import configSlice from './slices/configSlice'

const store = configureStore({
  reducer: {
    config: configSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
