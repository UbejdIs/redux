import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, action.payload];
    },
    remove(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export default cartSlice.reducer;

export const { add, remove } = cartSlice.actions;
