import React, { useEffect, useState } from "react";
import { baseApi } from "../../redux/apiSlice/data";

//this component contains CoinExchange convert currency one to another
const CoinExchange = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [sell, setSell] = useState("");
  const [buy, setBuy] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("");

  //Fetch Exchange rate data
  async function exchangefetchData() {
    try {
      const response = await baseApi.get("exchange_rates");
      const exchangeData = response.data.rates;

      const dataArray = Object.entries(exchangeData).map((item) => {
        return {
          value: item[1].name,
          unit: item[1].unit,
          rate: item[1].value,
        };
      });
      setData(dataArray);
    } catch (e) {
      console.log("failed");
    }
  }

  useEffect(() => {
    exchangefetchData();
  }, []);

  function changeHandler(e) {
    const val = e.target.value;
    if (val > 6) {
      setError("Amount should < 6");
    } else {
      setInput(val);
      setError(null);
    }
  }

  function clickHandler() {
    if (data.length > 0) {
      const sellSelect = data.find((x) => {
        return x.value === sell;
      });
      const buySelect = data.find((x) => {
        return x.value === buy;
      });
      console.log(sellSelect);
      console.log(buySelect);
      const sellRate = sellSelect.rate;
      const buyRate = buySelect.rate;
      const buyUnit = buySelect.unit;
      // console.log(sellRate);
      // console.log(buyRate);
      const resultValue = (input * buyRate) / sellRate;
      setResult(resultValue.toFixed(2));
      setUnit(buyUnit);
    }
    return;
  }

  console.log(data);

  return (
    <div className="bg-white w-full py-2 pb- rounded-md h-full">
      <div className="font-bold pl-5 pt-4">Exchange coins</div>
      <div className="flex justify-evenly items-center pt-7">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2">
            <span className=" text-red-400 font-semibold">Sell</span>
            <div>
              {
                <select
                  onChange={(e) => setSell(e.target.value)}
                  className="bg-gray-300 rounded-md text-sm w-[150px] h-8"
                >
                  <option selected disabled hidden>
                    Select a coin
                  </option>
                  {data.map((item) => {
                    return <option>{item.value}</option>;
                  })}
                </select>
              }
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className=" text-green-400 font-semibold">Buy</span>
            <div>
              {
                <select
                  onChange={(e) => setBuy(e.target.value)}
                  className="bg-gray-300 rounded-md text-sm w-[150px] h-8"
                >
                  <option selected disabled hidden>
                    Select a coin
                  </option>
                  {data.map((item) => {
                    return <option>{item.value}</option>;
                  })}
                </select>
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="w-[50px] h-[30px] bg-gray-300 rounded-md pl-1 text-sm"
            value={input}
            onChange={changeHandler}
            placeholder="Amt:"
          />
          <p className="text-xs text-red-500">{error}</p>
          <div className="text-sm text-sky-400">
            {result} {unit}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button
          onClick={clickHandler}
          className="bg-sky-600 w-[100px] text-sm font-bold text-white py-2 rounded-md ml-6"
        >
          Exchange
        </button>
      </div>
    </div>
  );
};

export default CoinExchange;
