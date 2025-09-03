import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { value: [] }, // cart items stored in an array
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload); // add new item
    },
    removeItem: (state) => {
      state.value.pop(); // remove last item
    },
    reSetItem: (state) => {
      state.value = []; // reset cart
    },
  },
});

// ✅ export actions & reducer properly
export const { addItem, removeItem, reSetItem } = CartSlice.actions;
export default CartSlice.reducer;
