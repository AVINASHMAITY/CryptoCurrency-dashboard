import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrency } from "../../redux/slice/currencySlice";
import { convertCurrency } from "../common/CurrencyToSymbol";
import { setSymbol } from "../../redux/slice/symbolSlice";

//this component contains Heading to show currency dropdown
const Heading = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currencyReducer.setCurrency);
  const ref = useRef();

  function currencyHandler(e) {
    e.preventDefault();
    const val = ref.current.value;
    dispatch(selectCurrency(val));
  }

  function symbolHandler() {
    dispatch(setSymbol(convertCurrency(currency)));
  }

  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full">
        <select
          onChange={currencyHandler}
          onClick={symbolHandler}
          ref={ref}
          value={currency}
          className="md:min-w-full h-9 rounded-md text-xs font-semibold"
        >
          <option value={"usd"}>USD</option>
          <option value={"inr"}>INR</option>
          <option value={"eur"}>EUR</option>
        </select>
      </div>
    </div>
  );
};

export default Heading;
