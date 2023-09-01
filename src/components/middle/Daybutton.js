import React from "react";
import { useDispatch } from "react-redux";
import { selectDay } from "../../redux/slice/daySlice";

//this component contains Daybutton for change (day,week,month,year) data inside chart
const Daybutton = () => {
  const dispatch = useDispatch();

  function dayHandler(e) {
    dispatch(selectDay(e.target.value));
  }

  return (
    <div>
      <div className="mt-2">
        <button
          className="bg-gray-300 ml-1 p-2 text-xs font-semibold rounded-md hover:bg-slate-500 active:bg-slate-500 focus:outine-none focus:ring focus:ring-slate-400"
          value={"1"}
          onClick={dayHandler}
        >
          1D
        </button>
        <button
          className="bg-gray-300 ml-1 p-2 text-xs font-semibold rounded-md hover:bg-slate-500 active:bg-slate-500 focus:outine-none focus:ring focus:ring-slate-400"
          value={"7"}
          onClick={dayHandler}
        >
          1W
        </button>
        <button
          className="bg-gray-300 ml-1 p-2 text-xs font-semibold rounded-md hover:bg-slate-500 active:bg-slate-500 focus:outine-none focus:ring focus:ring-slate-400"
          value={"30"}
          onClick={dayHandler}
        >
          1M
        </button>
        <button
          className="bg-gray-300 ml-1 p-2 text-xs font-semibold rounded-md hover:bg-slate-500 active:bg-slate-500 focus:outine-none focus:ring focus:ring-slate-400"
          value={"180"}
          onClick={dayHandler}
        >
          6M
        </button>
        <button
          className="bg-gray-300 ml-1 p-2 text-xs font-semibold rounded-md hover:bg-slate-500 active:bg-slate-500 focus:outine-none focus:ring focus:ring-slate-400"
          value={"365"}
          onClick={dayHandler}
        >
          1Y
        </button>
      </div>
    </div>
  );
};

export default Daybutton;
