import React from 'react';
import { isSameDay, isSunday, isSaturday, format } from 'date-fns';

const DateNumber = (props) => {
  const { theDay, type } = props;
  const today = new Date();
  const isToday = isSameDay(today, theDay) ? ' today' : '';
  const isSun = isSunday(theDay) ? ' sun' : '';
  const isSat = isSaturday(theDay) ? ' sat' : '';

  return (
    <div className={`date number-${type}${isSun}${isSat}${isToday}`}>
      {format(theDay, 'dd')}
    </div>
  );
};

export default DateNumber;
