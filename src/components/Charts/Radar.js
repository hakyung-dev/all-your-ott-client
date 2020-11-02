import React from 'react';
import { Radar, defaults } from 'react-chartjs-2';

defaults.global.animation.duration = '5000';
defaults.global.layout.margin = '0';

const ChartRadar = (props) => {
  const { directing, acting, visual, story, ost } = props.score;
  const data = {
    labels: ['감독 연출', '배우 연기', '영상미', '스토리', 'OST'],
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [directing, acting, visual, story, ost],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scale: {
      pointLabels: {
        fontSize: 14,
        fontFamily: 'S-CoreDream-4Regular',
        fontStyle: 'bold',
      },
      ticks: {
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <div className="score-chart">
      <Radar data={data} options={options} width={300} height={300} />
    </div>
  );
};

export default ChartRadar;
