import React, {useEffect, useState } from 'react'
import { baseApi } from '../../redux/apiSlice/data'

//this component contains CoinExchange convert currency one to another
const CoinExchange = () => {
  
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [sell, setSell] = useState("");
  const [buy, setBuy] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("")

  //Fetch Exchange rate data 
  async function exchangefetchData(){
    try{
      const response = await baseApi.get("exchange_rates");
    const exchangeData= response.data.rates;

    const dataArray = Object.entries(exchangeData).map((item)=>{
      return {
        value: item[1].name,
        unit: item[1].unit,
        rate: item[1].value
      }
    })
    setData(dataArray);
    }
    catch(e){
      console.log("failed");
    }
  };
  
  useEffect(()=>{
    exchangefetchData();
  },[]);


  function changeHandler(e){
    const val = e.target.value;
    if (val > 6){
      setError("Amount should be less than 6");
    }else{
      setInput(val);
      setError(null);
    }
  };


  function clickHandler(){
    if(data.length > 0){
      const sellSelect = data.find((x)=>{
        return x.value === sell
      })
      const buySelect = data.find((x)=>{
        return x.value === buy
      })
      console.log(sellSelect);
      console.log(buySelect);
      const sellRate = sellSelect.rate;
      const buyRate = buySelect.rate;
      const buyUnit = buySelect.unit;
      // console.log(sellRate);
      // console.log(buyRate);
      const resultValue = (input * buyRate)/sellRate;
      setResult(resultValue.toFixed(2));
      setUnit(buyUnit)
    }
    return;
  };

  console.log(data)

  return (
    <div className='bg-white w-full py-2 pb-5 rounded-md'>
      <div>
        <h1 className='pl-6 font-bold'>Exchange Coins</h1>
      </div>
      <div className='ml-[100px] flex flex-col gap-3 mt-1'>
        <div className='flex gap-4'>
        <p className='text-sm text-red-400 font-semibold'>Sell</p>
        <div>
          <select onChange={(e)=>setSell(e.target.value)} className='bg-gray-300 rounded-md text-sm w-[150px]'>
          <option selected disabled hidden>Select a coin</option>
          {
            data.map((item)=>{
              return <option>{item.value}</option>
            })
          }
          </select>
        </div>
        <input className='w-[50px] h-[30px] bg-gray-300 rounded-md pl-1 text-sm' value={input} onChange={changeHandler} placeholder='Amt:'/>
        <p>{error}</p>
        </div>
        <div className='flex gap-4'>
        <p className='text-sm text-green-400 font-semibold'>Buy</p>
        <div>
          <select onChange={(e)=>setBuy(e.target.value)} className='bg-gray-300 rounded-md text-sm w-[150px]'>
          <option selected disabled hidden>Select a coin</option>
          {
            data.map((item)=>{
              return <option>{item.value}</option>
            })
          }
          </select>
        </div>
        <div className='text-sm'>{result} {unit}</div>
        </div>
        <button onClick={clickHandler} className='bg-sky-600 w-[100px] text-sm font-bold text-white py-2 rounded-md ml-6'>Exchange</button>
      </div>
    </div>
  )
}

export default CoinExchange;
