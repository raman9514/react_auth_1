import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from '../features/auth/authSlice'
import { authApi } from '../services/authentication'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    [authApi.reducerPath]:authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)