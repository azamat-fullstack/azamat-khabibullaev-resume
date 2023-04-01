import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: localStorage.theme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const data = action.payload
      state.mode = data
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
