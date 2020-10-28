import React from 'react';

import oback from '../styles/images/500.png';
import chun from '../styles/images/1000.png';
import ochun from '../styles/images/5000.png';
import man from '../styles/images/10000.png';
import oman from '../styles/images/50000.png';

const Rate = (props) => {
  const { rate, type } = props;

  const graph = () => {
    if (type === `circle`) {
      return (
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="1"
          />
          <path
            className={`circle`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="1"
            strokeDasharray={`${rate * 10}, 100`}
          />
          <text x="10" y="22" className="rate-number">
            {rate}
          </text>
        </svg>
      );
    } else if (type === `money`) {
      const toImg = {
        500: { img: oback, text: '티켓 종이가 아까워요...' },
        1000: { img: chun, text: '그냥 내용을 아는 정도면 충분해요...' },
        5000: { img: ochun, text: '조조영화 정도는 괜찮아..!' },
        10000: { img: man, text: '시간을 투자하여 꼭 봐야해요!' },
        50000: { img: oman, text: 'N차 관람 필수!' },
      };
      return (
        <div>
          <img src={toImg[rate].img} alt="moneyrate" className="money-rate" />
          <div className="text">{toImg[rate].text}</div>
        </div>
      );
    }
  };

  return <>{graph()}</>;
};

export default Rate;
