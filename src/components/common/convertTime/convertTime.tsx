export default function TimeAgo({ getDate }: any): string {
  const currentDate: any = new Date();
  const date: any = new Date(getDate);

  const timeDifference = currentDate - date;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (yearsDifference > 0) {
    return yearsDifference + " years ago";
  } else if (monthsDifference > 0) {
    return monthsDifference + " months ago";
  } else if (daysDifference > 0) {
    return daysDifference + " days ago";
  } else if (hoursDifference > 0) {
    return hoursDifference + " hours ago";
  } else if (minutesDifference > 0) {
    return minutesDifference + " minutes ago";
  } else {
    return secondsDifference + " seconds ago";
  }
}
