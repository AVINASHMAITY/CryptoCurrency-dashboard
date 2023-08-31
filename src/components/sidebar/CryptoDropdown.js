import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import upicon from "../../assest/up-icon.png";
import downicon from "../../assest/down-icon.png";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/apiSlice/coinSlice";
import { Hourglass } from "react-loader-spinner";

//CryptoDropdown contains all crypto details like coin name, currency symbol, Coin image,market cap and 24h price change
const CryptoDropdown = () => {
  const coin = useSelector((state) => state.coinReducer.currencies);
  const symbol = useSelector((state) => state.symbolReducer.symbol);
  const id = useSelector((state) => state.currencyReducer.setCurrency);
  const loading = useSelector(state=> state.coinReducer.loading)
  const dispatch = useDispatch();

  //console.log(coin);

  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch,id]);

  //this function returns compact value
  const numbersFormatter = (number) => {
    const f = new Intl.NumberFormat("en-us", {
      notation: "compact",
    });

    return f.format(number);
  };

  if (loading) {
    return (
      <div className="bg-white h-full flex justify-center items-center rounded-lg">
        <Hourglass
          visible={true}
          height="50"
          width="50"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-2'>
      <p className='font-bold'>Cryptocurrency by market cap</p>
      <div>
        {
          // maps coin data
          coin.map((item) => {
            return <div className='flex justify-between pt-1'>
              <div className='flex flex-col justify-center gap-1'>
                <div className='flex items-center gap-1'>
                  <img src={item.image} alt={""} width="26px" />
                  <p className='font-semibold'>{item.name}</p>
                </div>
                <div className='flex gap-1 text-xs '>
                  <span className='font-semibold'>Mkt.Cap:</span>
                  <span>{symbol}</span>
                  <p>{numbersFormatter(item.market_cap)}</p>
                </div>
              </div>
              <div className=''>
                <div>
                  {
                    item.price_change_percentage_24h > 0 ?
                      <div className='flex justify-center items-center gap-1'>
                        <img src={upicon} alt='up' width="35px" />
                        <span className='text-lime-400 text-xs font-semibold'>{`${item.price_change_percentage_24h.toFixed(3)}%`}
                        </span>
                      </div> :
                      <div className='flex justify-center items-center gap-1'>
                        <img src={downicon} alt='down' width="35px" />
                        <span className='text-red-400 text-xs font-semibold'>{`${item.price_change_percentage_24h.toFixed(3)}%`}
                        </span>
                      </div>
                  }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default CryptoDropdown;
