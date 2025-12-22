function updateTime() {
  let date1Element = document.querySelector(".date-1");
  date1Element.innerHTML = moment().tz("Europe/Madrid").format("MMMM Do YYYY");

  let time1Element = document.querySelector(".time-1");
  time1Element.innerHTML =
    moment().tz("Europe/Madrid").format("h:mm:ss") +
    " " +
    moment().tz("Europe/Madrid").format("a");
  let date2Element = document.querySelector(".date-2");
  date2Element.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");

  let time2Element = document.querySelector(".time-2");
  time2Element.innerHTML =
    moment().tz("America/New_York").format("h:mm:ss") +
    " " +
    moment().tz("America/New_York").format("a");

  let date3Element = document.querySelector(".date-3");
  date3Element.innerHTML = moment().tz("Asia/Seoul").format("MMMM Do YYYY");

  let time3Element = document.querySelector(".time-3");
  time3Element.innerHTML =
    moment().tz("Asia/Seoul").format("h:mm:ss") +
    " " +
    moment().tz("Asia/Seoul").format("a");

  let date4Element = document.querySelector(".date-4");
  date4Element.innerHTML = moment().tz("Africa/Cairo").format("MMMM Do YYYY");

  let time4Element = document.querySelector(".time-4");
  time4Element.innerHTML =
    moment().tz("Africa/Cairo").format("h:mm:ss") +
    " " +
    moment().tz("Africa/Cairo").format("a");
}

updateTime();
setInterval(updateTime, 1000);
