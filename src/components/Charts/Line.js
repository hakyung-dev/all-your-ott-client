import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.elements.point.radius = '5';
defaults.global.elements.line.tension = '0.1';

const ChartLine = (props) => {
  const { label, dataset, title, description } = props;

  const data = {
    labels: label,
    datasets: dataset,
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-1',
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-2',
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartLine;
