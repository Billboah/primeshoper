import { createSlice } from '@reduxjs/toolkit'
export interface UserState {
  user: {
    userId: string
    displayName: string
    email: string
    userImage: string
  } | null
}
const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
