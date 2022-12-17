module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

format_time: (postedTime) => {
  let currentTime = new Date();

  let timeElapsed = Math.floor((currentTime - postedTime) / 1000 / 60);

  if (timeElapsed < 60) {
    return `${timeElapsed} minutes ago`;
  } else if (timeElapsed >= 60 && timeElapsed < 1440) {
    let hours = Math.floor(timeElapsed / 60);

    return `${hours} hours ago`;
  } else {
    let days = Math.floor(timeElapsed / 1440);

    return `${days} days ago`;
  }
}
};
