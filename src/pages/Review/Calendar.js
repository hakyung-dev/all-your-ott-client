import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  isSameDay,
  isSunday,
  isSaturday,
} from 'date-fns';
import { WEEKS, MONTHS } from '../../constants/date';

const Calendar = (props) => {
  const { selectDay, selectedDay } = props;

  const today = new Date();
  const selectedDYear = selectedDay.getFullYear();
  const selectedDMonth = selectedDay.getMonth();
  const monthlyTitle = `${MONTHS[selectedDMonth]} ${selectedDYear}`;

  const firstDay = startOfMonth(selectedDay).getDay();
  const lastDate = endOfMonth(selectedDay).getDate();
  const dayOfMonth = [];
  const blank = [];
  for (let i = 1; i <= lastDate; i++) {
    dayOfMonth.push(i);
  }
  for (let i = 0; i < firstDay; i++) {
    blank.push(i);
  }

  const handleLeftClick = () => {
    selectDay(startOfMonth(subMonths(selectedDay, 1)));
  };

  const handleRightClick = () => {
    selectDay(startOfMonth(addMonths(selectedDay, 1)));
  };

  const makeWeek = WEEKS.map((week, i) => {
    return (
      <div className="week" key={i}>
        {week}
      </div>
    );
  });

  const makeBlank = blank.map((b, i) => {
    return <div className="date blank" key={i} />;
  });

  const makeDate = dayOfMonth.map((day, i) => {
    const theDay = new Date(selectedDYear, selectedDMonth, day);
    const isToday = isSameDay(today, theDay) ? ' today' : '';
    const isSun = isSunday(theDay) ? ' sun' : '';
    const isSat = isSaturday(theDay) ? ' sat' : '';

    const handleClick = () => {
      selectDay(theDay);
    };

    return (
      <div className="date squre" key={i} onClick={handleClick}>
        <div className={`date-number${isSun}${isSat}${isToday}`} key={i}>
          {day}
        </div>
      </div>
    );
  });

  return (
    <div className="container-wide">
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
