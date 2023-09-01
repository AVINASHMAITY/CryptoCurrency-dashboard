import { createSlice } from "@reduxjs/toolkit";

//Create Slice for state management of (Day,Week,Month,Year)
const daySlice = createSlice({
  name: "daySlice",
  initialState: {
    days: "7",
  },
  reducers: {
    selectDay: (state, action) => {
      state.days = action.payload;
    },
  },
});

export default daySlice.reducer;
export const { selectDay } = daySlice.actions;
