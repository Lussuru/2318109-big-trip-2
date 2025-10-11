import dayjs from 'dayjs';

const humanizePointDueDate = (dueDate, dateFormat) => dueDate ? dayjs(dueDate).format(dateFormat) : '';

const getDurationDate = (dateFrom, dateTo) => {
  const oneSecond = 1000;
  const oneMinute = 60;
  const oneDay = 24;

  const start = dayjs(dateFrom);
  const end = dayjs(dateTo);

  const diffMs = end.diff(start);

  const totalMinutes = Math.floor(diffMs / (oneSecond * oneMinute));
  const totalHours = Math.floor(totalMinutes / oneMinute);
  const days = Math.floor(totalHours / oneDay);
  const hours = totalHours % oneDay;
  const minutes = totalMinutes % oneMinute;

  const pad2 = (time) => String(time).padStart(2, '0');

  if (days >= 1) {
    return `${pad2(days)}D ${(hours ? `${pad2(hours)}H` : '00H')} ${minutes ? `${pad2(minutes)}M` : '00M'}`;
  } else if (totalHours >= 1) {
    return `${pad2(totalHours)}H ${minutes ? `${pad2(minutes)}M` : '00M'}`;
  } else {
    return `${pad2(totalMinutes)}M`;
  }
};

export { humanizePointDueDate, getDurationDate};
