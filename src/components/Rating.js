import React, { useState } from 'react';
import oback from '../styles/images/500.png';
import chun from '../styles/images/1000.png';
import ochun from '../styles/images/5000.png';
import man from '../styles/images/10000.png';
import oman from '../styles/images/50000.png';

const Rating = (props) => {
  const { handleChange, setHover, hover } = props;
  const [rating, setRating] = useState(null);

  const handleRating = (e) => {
    setRating(e.target.value);
    handleChange(e);
  };

  const handleMouseEnter = (rating) => {
    setHover(rating);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="rating-money">
      <label>
        <input
          className="invisible"
          type="radio"
          name="rating"
          value={500}
          onChange={handleRating}
        />
        <img
          className={500 <= (hover || rating) ? 'money' : 'money-blank'}
          src={oback}
          width="40px"
          alt="money"
          onMouseEnter={() => handleMouseEnter(500)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </label>
      <label>
        <input
          className="invisible"
          type="radio"
          name="rating"
          value={1000}
          onChange={handleRating}
        />
        <img
          className={1000 <= (hover || rating) ? 'money' : 'money-blank'}
          src={chun}
          width="80px"
          alt="money"
          onMouseEnter={() => handleMouseEnter(1000)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </label>
      <label>
        <input
          className="invisible"
          type="radio"
          name="rating"
          value={5000}
          onChange={handleRating}
        />
        <img
          className={5000 <= (hover || rating) ? 'money' : 'money-blank'}
          src={ochun}
          width="80px"
          alt="money"
          onMouseEnter={() => handleMouseEnter(5000)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </label>
      <label>
        <input
          className="invisible"
          type="radio"
          name="rating"
          value={10000}
          onChange={handleRating}
        />
        <img
          className={10000 <= (hover || rating) ? 'money' : 'money-blank'}
          src={man}
          width="80px"
          alt="money"
          onMouseEnter={() => handleMouseEnter(10000)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </label>
      <label>
        <input
          className="invisible"
          type="radio"
          name="rating"
          value={50000}
          onChange={handleRating}
        />
        <img
          className={50000 <= (hover || rating) ? 'money' : 'money-blank'}
          src={oman}
          width="80px"
          alt="money"
          onMouseEnter={() => handleMouseEnter(50000)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </label>
    </div>
  );
};

export default Rating;
