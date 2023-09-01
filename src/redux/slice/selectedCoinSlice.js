import { createSlice } from "@reduxjs/toolkit";

// Create Slice for state management of Coin Data we Can Exchange coin data
const selectedCoinSlice = createSlice({
  name: "selectCoinSlice",
  initialState: {
    coin: "bitcoin",
  },
  reducers: {
    setSelectionCoin: (state, action) => {
      state.coin = action.payload;
    },
  },
});

export default selectedCoinSlice.reducer;
export const { setSelectionCoin } = selectedCoinSlice.actions;
