import { createSlice } from "@reduxjs/toolkit";

// Create Slice for state management of currency dropdown (inr,usd,eur)
const currencySlice = createSlice({
  name: "currencySlice",
  initialState: {
    setCurrency: "inr",
  },
  reducers: {
    selectCurrency: (state, action) => {
      state.setCurrency = action.payload;
    },
  },
});

export default currencySlice.reducer;
export const { selectCurrency } = currencySlice.actions;
