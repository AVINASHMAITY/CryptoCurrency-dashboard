import { Chart as ChartJs,ArcElement,Tooltip,Legend } from 'chart.js';
import React from 'react'
import { Pie } from 'react-chartjs-2';

ChartJs.register(
    ArcElement,Tooltip,Legend
);

//this component contains Piechart show pie chart using chart.js and react-chartjs-2
const PieChart = () => {

  const data = {
    labels: ['polygon','Ethereum','Cardano'],
    datasets:  [
        {
            label: "$",
            data: [300,400,300],
            backgroundColor:['aqua','bloodorange','purple'],
            borderWidth:1,
            hoverOffset:8
        }
    ]
  };

  const options = {
    aspectRatio: 2,
        plugins: {
            legend: {
                position: "right",
                fullWidth: false,
                labels: {
                    color: "#5c5c5c",
                    padding: 12,
                    usePointStyle: true,
                    font: {
                        size: 13,
                        weight: "bold",
                    },
                },
            },
            datalabels: {
                align: "center",
                color: "#FFF",
                font: {
                    size: 25,
                    weight: "bold",
                },
            },
        },
  }

  return (
    <div className='bg-white w-full rounded-md pt-2 pb-2'>
      <div>
        <div className='flex justify-around mt-1 font-bold'>
        <h1>Portfolio</h1>
        <h1>Total Value: $1000</h1>
        </div>
        <div className='w-[240px] ml-[100px] mt-[30px]'>
        <Pie 
          data={data}
          options={options}
        ></Pie>
        </div>
      </div>
    </div>
  )
}

export default PieChart;
