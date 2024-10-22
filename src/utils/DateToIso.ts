import { differenceInDays } from "date-fns";

export const formatToISO = (date:any) => {
  const pad = (num:any, size = 2) => String(num).padStart(size, "0");
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const offsetHours = pad(Math.floor(Math.abs(offset) / 60));
  const offsetMinutes = pad(Math.abs(offset) % 60);

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}${sign}${offsetHours}:${offsetMinutes}`;
};

export const calculateDaysBetweenDates = (startDate: Date, endDate: Date): number => {
  return differenceInDays(endDate, startDate);
};
