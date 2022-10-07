import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice'
import userInfo from './userInfoSlice'

const store = configureStore({
  reducer: {
    auth,
    userInfo,
  },
})

export default store
