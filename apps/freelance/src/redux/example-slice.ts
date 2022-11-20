import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type User = { 
 token: string
}

type UserState = {
  list: User[]
};

const initialState: UserState = {
  list: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.list.push(action.payload)
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer