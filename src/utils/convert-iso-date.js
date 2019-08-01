const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const twelveHour = (date) => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  // The hour '0' should be '12'.
  hours = hours > 0 ? hours : 12;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

const convertIsoDate = (isoDate, time = false) => {
  const localDate = new Date(isoDate);
  const day = localDate.getDate();
  const month = Months[localDate.getMonth()];
  const year = localDate.getFullYear();
  if (time) {
    return `${twelveHour(localDate)}, ${month} ${day}, ${year}`;
  }
  return `${month} ${day}, ${year}`;
};
export default convertIsoDate;
