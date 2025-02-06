import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "owais",
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    name: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "Ali"
    },
    decrement: (state) => {
      state.value -= 1
    },
    multiply: (state)=>{
state.value *=2
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { name, decrement, incrementByAmount,multiply } = cardSlice.actions

export default cardSlice.reducer