import React from 'react'
import {PolarArea} from 'react-chartjs-2'

const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
const PolarAreaChart = () => {
    return (
        <div>
            <PolarArea  data={data}
                height={400}
                width={600}
                />
        </div>
    )
}

export default PolarAreaChart
