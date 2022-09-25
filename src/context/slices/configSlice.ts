import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeType } from '../../types/config.types'

export interface Config_I {
  theme: ThemeType
}
const initialState: Config_I = {
  theme: ThemeType.light
}

const configReducer = createSlice({
  name: 'configReducer',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload
    }
  }
})

export const { changeTheme } = configReducer.actions
export default configReducer.reducer
