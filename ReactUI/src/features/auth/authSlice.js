import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access : "",
  refresh : ""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.access = ""
      state.refresh = ""
      localStorage.removeItem('refresh');
      localStorage.removeItem('access');
    },
    login: (state,action) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer