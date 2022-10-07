import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: null,
  title: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.token = action.payload
    },
    isLogout: (state, action) => {
      state.token = null
    },
  },
})

export const { isLogin } = modalSlice.actions

export default modalSlice.reducer
