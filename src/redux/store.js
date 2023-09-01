import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./apiSlice/coinSlice";
import currencySlice from "./slice/currencySlice";
import chartSlice from "./apiSlice/chartSlice";
import daySlice from "./slice/daySlice";
import selectedCoinSlice from "./slice/selectedCoinSlice";
import symbolSlice from "./slice/symbolSlice";

//we can store all data
export default configureStore({
  reducer: {
    currencyReducer: currencySlice,
    coinReducer: coinSlice,
    chartReducer: chartSlice,
    dayReducer: daySlice,
    selectCoinReducer: selectedCoinSlice,
    symbolReducer: symbolSlice,
  },
});
