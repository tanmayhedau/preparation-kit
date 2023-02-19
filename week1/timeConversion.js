function timeConversion(s) {
  let time = s.slice(8);
  let hours = s.slice(0, 2);
  let minutes = s.slice(3, 5);
  let seconds = s.slice(6, 8);

  if (time === "AM" && hours === "12") {
    hours = "00";
  } else if (time === "PM" && hours === "12") {
    hours = "12";
  } else if (time === "PM") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}
console.log(timeConversion("12:00:00PM"));
