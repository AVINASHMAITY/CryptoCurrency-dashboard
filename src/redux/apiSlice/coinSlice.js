import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "./data";

//Coin API Fetch with the help of Redux-Thunk
export const fetchData = createAsyncThunk("currency/api", async (id) => {
  const response = await baseApi.get(
    `coins/markets?vs_currency=${id}&order=market_cap_desc&per_page=11&page=1&sparkline=false&locale=en`
  );
  return response.data;
});

//Create Slice
const coinSlice = createSlice({
  name: "coinSlice",
  initialState: {
    currencies: [],
    loading: false,
    error: null,
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.currencies = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default coinSlice.reducer;
