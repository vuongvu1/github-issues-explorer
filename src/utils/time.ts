const ONE_YEAR_IN_SECONDS = 31536000;
const ONE_MONTH_IN_SECONDS = 2592000;
const ONE_DAY_IN_SECONDS = 86400;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

export const timeSince = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / ONE_YEAR_IN_SECONDS;

  if (interval > 1) {
    return `${Math.floor(interval)} years`;
  }

  interval = seconds / ONE_MONTH_IN_SECONDS;
  if (interval > 1) {
    return `${Math.floor(interval)} months`;
  }

  interval = seconds / ONE_DAY_IN_SECONDS;
  if (interval > 1) {
    return `${Math.floor(interval)} days`;
  }

  interval = seconds / ONE_HOUR_IN_SECONDS;
  if (interval > 1) {
    return `${Math.floor(interval)} hours`;
  }

  interval = seconds / ONE_MINUTE_IN_SECONDS;
  if (interval > 1) {
    return `${Math.floor(interval)} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
