import React from 'react';

const Counter = (props) => {
  const { target, type } = props;
  const counters = document.querySelectorAll(`.${type}`);
  const time = 150;

  counters.forEach((counter) => {
    const updateCount = () => {
      const count = +counter.innerText;

      const inc = target > time ? Math.floor(target / time) : 1;
      const speed = target > time ? 1 : time / target;

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });

  return <span className={`${type}`}>0</span>;
};

export default Counter;
