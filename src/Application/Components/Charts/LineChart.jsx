import React from 'react'
import {Line} from 'react-chartjs-2' 

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
    label: 'Purchase Amount',
    data: [65, 59, 80, 81, 26, 55, 40],
    fill: false,
    borderColor: '#ef476f',
    yAxisID: 'y',
    },
    {
    label: 'Sold Amount',
    data: [95, 29, 40, 11, 76, 95, 20],
    fill: false,
    borderColor: 'rgb(54, 162, 235)',
    yAxisID: 'y1',
    }
  ],
};
 
  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
        },
      stacked: false,
      plugins: {
        title: {
          display: true,
          
        }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
         position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    
  },
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  )
}

export default LineChart
