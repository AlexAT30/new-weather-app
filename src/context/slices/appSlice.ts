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
      country: 'Mexico',
      lat: 20.72,
      lon: -103.38
    },
    {
      id: 2,
      username: 'Evelyn',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico',
      lat: 20.67,
      lon: -103.39
    },
    {
      id: 3,
      username: 'Harry',
      city: 'Lincoln',
      state: 'Nebraska',
      country: 'United States of America',
      lat: 40.8,
      lon: -96.67
    },
    {
      id: 4,
      username: 'María',
      city: 'Francia',
      state: 'Colon',
      country: 'Honduras',
      lat: 15.85,
      lon: -85.58
    },
    {
      id: 5,
      username: 'Brayan',
      city: 'Tlajomulco De Zuñiga',
      state: 'Jalisco',
      country: 'Mexico',
      lat: 20.47,
      lon: -103.45
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
