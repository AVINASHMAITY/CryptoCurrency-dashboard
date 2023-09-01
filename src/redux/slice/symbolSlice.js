import { createSlice } from "@reduxjs/toolkit";

// Create Slice for state management Currency Symbol
const symbolSlice = createSlice({
  name: "symbolSlice",
  initialState: {
    symbol: "₹",
  },
  reducers: {
    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

export default symbolSlice.reducer;
export const { setSymbol } = symbolSlice.actions;
