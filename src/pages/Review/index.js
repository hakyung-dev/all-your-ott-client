import React from 'react';

import Calendar from './Calendar';
import MonthList from './MonthList';

const Review = (props) => {
  const { review, day, changeDay, signInUser, setUserReview } = props;

  return (
    <>
      <section>
        <Calendar review={review} day={day} changeDay={changeDay} />
      </section>
      <section className="bg-grey bg-review">
        <MonthList
          user={signInUser}
          review={review}
          day={day}
          setUserReview={setUserReview}
        />
      </section>
    </>
  );
};

export default Review;
