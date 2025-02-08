import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./couter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})