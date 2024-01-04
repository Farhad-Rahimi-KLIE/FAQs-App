$(document).ready(function () {
  function showtime() {
    // To Gate current time/date
    let date = new Date();

    // Make variables to get hours, minutes, seconds
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // AM, PM Setting
    let session = "AM";

    // Condation for time Behaviour
    if (hours == 0) {
      hours = 12;
    }
    if (hours >= 12) {
      session = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // set the variable to Span

    $("#hours").text(hours);
    $("#min").text(min);
    $("#sec").text(sec);
    $("#period").text(session);

    // to change time in every second
    setTimeout(showtime, 1000);
  }
  showtime();
});
