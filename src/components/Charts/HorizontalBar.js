import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const ChatHorizontalBar = (props) => {
  const { label, dataset, title, description } = props;

  const data = {
    labels: label,
    datasets: dataset,
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <HorizontalBar data={data} options={options} />
    </div>
  );
};

export default ChatHorizontalBar;
