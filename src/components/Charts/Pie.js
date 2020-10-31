import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.animation.duration = '5000';
defaults.global.layout.padding = '0';

const ChartPie = (props) => {
  const { title, description, label, dataset } = props;

  const serviceData = {
    labels: label[0],
    datasets: dataset[0],
  };

  const typeData = {
    labels: label[1],
    datasets: dataset[1],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="rowToColumn pies ">
        <div className="canvas-container">
          <Pie data={serviceData} options={options} height={250} />
        </div>
        <div className="canvas-container">
          <Pie data={typeData} options={options} height={250} />
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
