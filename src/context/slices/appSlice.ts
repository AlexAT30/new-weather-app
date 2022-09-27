import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User_I } from '../../types/users.types'

export interface Users_I {
  users: User_I[]
}
const initialState: Users_I = {
  users: [
    {
      id: 1,
      username: 'usuario 1',
      city: 'ciudad 1',
      lat: '1234',
      lon: '123'
    },
    {
      id: 2,
      username: 'usuario 2',
      city: 'ciudad 2',
      lat: '123',
      lon: '123'
    },
    {
      id: 3,
      username: 'usuario 3',
      city: 'ciudad 3',
      lat: '123',
      lon: '123'
    },
    {
      id: 4,
      username: 'usuario 4',
      city: 'ciudad 4',
      lat: '123',
      lon: '123'
    },
    {
      id: 5,
      username: 'usuario 5',
      city: 'ciudad 5',
      lat: '123',
      lon: '123'
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
    }
  }
})

export const { deleteUser, editUser } = appSlice.actions
export default appSlice.reducer
