// SalesPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = () => {
  const data = {
    labels: ['Electronics', 'Clothing', 'Groceries', 'Furniture', 'Books'],
    datasets: [
      {
        data: [30, 25, 15, 20, 10], // Sales percentages for each type
        backgroundColor: ['rgb(224, 195, 252)', 'rgb(96, 175, 245)', '#f26a4b', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['rgb(224, 195, 252)', 'rgb(96, 175, 245)', '#f26a4b', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable automatic resizing
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        bodyColor: 'white',
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };
 return <div style={{ width: '300px', height: '200px' }}> {/* Set the size here */}
      <Pie data={data} options={options} />
    </div>
};

export default SalesPieChart;
