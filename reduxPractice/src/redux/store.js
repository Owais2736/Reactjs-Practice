import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './counter/counterSlice'
import cardReducer from './card/cardSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer
  },
})