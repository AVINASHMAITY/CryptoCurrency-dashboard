import React, { useState } from "react";
import { useSelector } from "react-redux";

//this component contains SearchOption we show coin details during searching
const SearchOption = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState([]);
  const coin = useSelector((state) => state.coinReducer.currencies);

  function coinHandler(value) {
    setInput(value);
    //Filter the coin during search
    const coinResult = coin.filter((item) => {
      return (
        value && item && item.name && item.name.toLowerCase().includes(value)
      );
    });
    setResult(coinResult);
  }

  return (
    <div className="w-full">
      <div className="flex gap-1">
        <div className="relative w-full">
          <input
            className="w-full h-9 rounded-md text-sm pl-5 focus:outline-none"
            onChange={(e) => coinHandler(e.target.value)}
            value={input}
            type="search"
            placeholder="Search by coin name"
          />
        </div>
        <button className="bg-blue-600 h-9 w-[3.2rem] text-white font-semibold text-sm rounded-md">
          Search
        </button>
      </div>
      <div className="absolute w-[59%]">
        {result.map((item, id) => {
          return (
            <div
              className="flex bg-white pt-1 rounded-md w-full item-center"
              key={id}
            >
              <img
                className="w-[50px] h-[50px] p-1 ml-2"
                src={item.image}
                alt={item.name}
              />
              <p className="p-2">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchOption;
