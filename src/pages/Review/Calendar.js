import React from 'react';
import { Link } from 'react-router-dom';
import { RiAddCircleLine } from 'react-icons/ri';
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  isSameDay,
  format,
} from 'date-fns';

import { WEEKS, MONTHS } from '../../constants/date';
import DateNumber from '../../components/DateNumber';

const Calendar = (props) => {
  const { review, day, changeDay } = props;
  const selectedDYear = day.getFullYear();
  const selectedDMonth = day.getMonth();
  const monthlyTitle = `${MONTHS[selectedDMonth]} ${selectedDYear}`;

  const firstDay = startOfMonth(day).getDay();
  const lastDate = endOfMonth(day).getDate();
  const dayOfMonth = [];
  const blank = [];
  for (let i = 1; i <= lastDate; i++) {
    dayOfMonth.push(i);
  }
  for (let i = 0; i < firstDay; i++) {
    blank.push(i);
  }

  const handleLeftClick = () => {
    changeDay(startOfMonth(subMonths(day, 1)));
  };

  const handleRightClick = () => {
    changeDay(startOfMonth(addMonths(day, 1)));
  };

  const makeWeek = WEEKS.map((week, i) => {
    return (
      <div className="week" key={i}>
        {week}
      </div>
    );
  });

  const makeBlank = blank.map((b, i) => {
    return <div className="date-box blank" key={i} />;
  });

  const makeDate = dayOfMonth.map((date, i) => {
    const theDay = new Date(selectedDYear, selectedDMonth, date);

    const reviewOfDay = [];
    if (review) {
      review.forEach((item) => {
        const reviewDate = new Date(item.date);
        if (isSameDay(reviewDate, theDay)) {
          reviewOfDay.push(item);
        }
      });
    }

    const dateBox = () => {
      if (!reviewOfDay.length) {
        return <DateNumber theDay={theDay} type={`calendar`} />;
      } else if (reviewOfDay.length === 1) {
        return (
          <img
            className="review-poster inner"
            src={reviewOfDay[0].content.poster}
            alt="poster"
          />
        );
      } else {
        return (
          <div className="wrap-review inner">
            <img
              className="review-poster"
              src={reviewOfDay[0].content.poster}
              alt="poster"
            />
            <img
              className="review-poster"
              src={reviewOfDay[1].content.poster}
              alt="poster"
            />
            {reviewOfDay.length > 2 ? (
              <div className="more">+{reviewOfDay.length - 2}</div>
            ) : (
              <></>
            )}
          </div>
        );
      }
    };

    return (
      <div className="date-box squre" key={i}>
        {dateBox()}
        <div className="wrap-hover">
          <Link
            to={{
              pathname: '/review/new',
              state: { selectedDate: format(new Date(theDay), 'yyyy-MM-dd') },
            }}
            className="button link-add"
          >
            <RiAddCircleLine />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container-wide container-calendar">
      <div className="calendar-title">
        <button className="arrow" onClick={handleLeftClick}>
          {`<`}
        </button>
        <div className="title">{monthlyTitle}</div>
        <button className="arrow" onClick={handleRightClick}>
          {`>`}
        </button>
      </div>
      <div className="calendar wrap-week">{makeWeek}</div>
      <div className="calendar wrap-date">
        {makeBlank}
        {makeDate}
      </div>
    </div>
  );
};

export default Calendar;
