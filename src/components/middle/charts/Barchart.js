import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChart } from "../../../redux/apiSlice/chartSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment/moment";
import { Hourglass } from "react-loader-spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//this component contains barchart using chart.js and react-chartjs-2
const Barchart = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chartReducer.chart);
  const coin = useSelector((state) => state.selectCoinReducer.coin);
  const currency = useSelector((state) => state.currencyReducer.setCurrency);
  const symbol = useSelector((state) => state.symbolReducer.symbol);
  const day = useSelector((state) => state.dayReducer.days);
  const loading = useSelector((state) => state.chartReducer.loading);

  // Dispatch the action to fetch chart data
  useEffect(() => {
    dispatch(
      fetchChart({
        coin: coin,
        currency: currency,
        day: day,
      })
    );
  }, [dispatch, day, currency, coin]);

  const BarChartData = chartData.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  const numbersFormatter = (number) => {
    const f = new Intl.NumberFormat("en-us", {
      notation: "compact",
    });

    return f.format(number);
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },

    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return symbol + numbersFormatter(value);
          },
        },
      },
    },
  };

  const data = {
    labels: BarChartData.map((value) => moment(value.x).format("MMM Do")),
    datasets: [
      {
        label: coin
          ? `${currency.toUpperCase()} vs ${coin.toUpperCase()}  `
          : currency.toUpperCase(),
        data: BarChartData.map((val) => val.y),
        backgroundColor: "rgba(76, 193, 189)",
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
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
    <div className="h-[320px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barchart;
