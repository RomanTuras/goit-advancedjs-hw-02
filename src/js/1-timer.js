// Timer

import flatpickr from "flatpickr";
import iziToast from "izitoast";
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";


const cal = document.getElementById("datetime-picker");
const btn = document.querySelector("[data-start]")
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let userSelectedDate;
let intervalId = 0;
let c = 0; // QA

btn.disabled = true

// Validate selected date
const validateDate = date => {
  const today = new Date();
  if ((date - today) <= 0) {
    btn.disabled = true;
    iziToast.settings({
      position: 'topRight',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
    });
    iziToast.error({
      message: "Please choose a date in the future"
    });
    return;
  }
  userSelectedDate = date;
  btn.disabled = false;
}

// Options for flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    validateDate(selectedDates[0])
  },
};

// init flatpickr
flatpickr(cal, options);

// Add a leading zero
const addLeadingZero = value => {
  return value.padStart(2, '0');
}

// Rendering timer value
const render = value => {
  days.innerHTML = value.days;
  hours.innerHTML = addLeadingZero(String(value.hours));
  minutes.innerHTML = addLeadingZero(String(value.minutes));
  seconds.innerHTML = addLeadingZero(String(value.seconds));
}

// Countdown logic
const countDown = () => {
  let difference = userSelectedDate - new Date();
  let value = convertMs(difference);
  // c++ // QA
  if (c == 10 || difference <= 1000) {
    clearInterval(intervalId);
    cal.disabled = false;
  }
  render(value);
}

// Starting timer
const startTimer = () => {
  btn.disabled = true;
  cal.disabled = true;
  intervalId = setInterval(countDown, 1000);
}

btn.addEventListener("click", startTimer);

// Converting ms
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}