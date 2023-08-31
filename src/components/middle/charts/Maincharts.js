import React, { useState } from "react";
import Daybutton from "../Daybutton";
import Coindropdown from "../Coindropdown";
import Linechart from "./Linechart";
import Barchart from "./Barchart";
import HorizontalBarChart from "./HorizontalBarChart";

//This components contains Daybutton,Coindropdown,linechart,barchart,horizontalbarchart
const Maincharts = () => {
  const [data, setData] = useState("line");

  return (
    <div className="flex">
      <div className="w-[100%] bg-white rounded-md">
        <div className="flex justify-evenly flex-wrap">
          <div>
            <Daybutton />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <div>
              <Coindropdown />
            </div>
            <div>
              <div className="mt-2">
                <select
                  className="bg-gray-300 rounded-md"
                  onChange={(e) => setData(e.target.value)}
                >
                  <option value={"line"}>Line Chart</option>
                  <option value={"Horizontalbar"}>Bar Chart Horizonatal</option>
                  <option value={"verticalbar"}>Bar Chart Vertical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {data === "line" ? (
          <Linechart />
        ) : data === "Horizontalbar" ? (
          <HorizontalBarChart />
        ) : (
          <Barchart />
        )}
      </div>
    </div>
  );
};

export default Maincharts;
