import { addDays, isPast, addMonths } from 'date-fns';

export const makeColorNumber = () => {
  return Math.floor(Math.random() * 255);
};

export const setColorByService = (service, opacity = 1) => {
  if (service === `NETFLIX`) {
    return `rgb(179,17,0)`;
  } else if (service === `WATCHA`) {
    return `rgb(255,29,83)`;
  } else if (service === `AMAZON`) {
    return `rgb(0,168,225)`;
  } else if (service === `WAVV`) {
    return `rgb(27,38,222)`;
  } else if (service === `TVING`) {
    return `rgb(144,14,255)`;
  } else if (service === `YOUTUBE`) {
    return `rgb(254,29,0)`;
  }

  return `rgb(${makeColorNumber()}, ${makeColorNumber()},${
    (makeColorNumber(), opacity)
  })`;
};

export const groupBy = (array, property) => {
  return array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);
};

export const paySoon = (array, inDay) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const fixedDate = addDays(today, inDay);
  let soon = [];
  array.forEach((ott) => {
    let billingDate = new Date(year, month, ott.billing_date);
    if (isPast(billingDate)) {
      billingDate = addMonths(billingDate, 1);
    }

    if (billingDate < fixedDate) {
      soon.push(ott.service_name);
    }
  });
  return soon;
};
