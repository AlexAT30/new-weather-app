import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User_I } from '../../types/users.types'

export interface Users_I {
  users: User_I[]
}
const initialState: Users_I = {
  users: [
    {
      id: 1,
      username: 'Alejandro',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'MX',
      lat: 20.7211203,
      lon: -103.3913671
    },
    {
      id: 2,
      username: 'Evelyn',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'MX',
      lat: 20.6720375,
      lon: -103.338396
    },
    {
      id: 3,
      username: 'Harry',
      city: 'Lincoln',
      state: 'England',
      country: 'GB',
      lat: 53.2336301,
      lon: -0.5392172
    },
    {
      id: 4,
      username: 'María',
      city: 'Francia',
      state: 'San Luis',
      country: 'AR',
      lat: -33.28253515,
      lon: -66.34082394382389
    },
    {
      id: 5,
      username: 'Brayan',
      city: 'Tlajomulco',
      state: 'Jalisco',
      country: 'MX',
      lat: 20.4737273,
      lon: -103.4469713
    }
  ]
}

const appSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    editUser: (state, action: PayloadAction<User_I>) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload
        return user
      })
    },
    createUser: (state, action: PayloadAction<User_I>) => {
      state.users = [...state.users, action.payload]
    }
  }
})

export const { deleteUser, editUser, createUser } = appSlice.actions
export default appSlice.reducer
