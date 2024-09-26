import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementBy(state, action) {
      console.log("action.payload", action.payload);
      state.value = state.value + action.payload;
    },
    decrementBy(state, action) {
      state.value = state.value - action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
