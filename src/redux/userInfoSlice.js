import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  password: null,
  mobile: null,
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUpdateUserInfo: (state, action) => {
      const res = action.payload
      const result = {
        email: res.email,
        password: res.password,
        mobile: res.mobile,
      }
      return result
    },
  },
})

export const { setUpdateUserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer
