import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const refs = {
  startBtn: document.querySelector("[data-start]"),
  input: document.querySelector("#datetime-picker"),

  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.startBtn.setAttribute("disabled", "");

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate <= Date.now()) {
      Notify.failure("Виберіть дату у майбутньому");
      return;
    }
    refs.startBtn.removeAttribute("disabled");
  },
};

flatpickr("input#datetime-picker", options);

function onStartBtnClick() {
  Notify.success("Відлік розпочався");
  const intervalId = setInterval(() => {
    const timeDifference = selectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    if (timeDifference <= 1000) {
      clearInterval(intervalId);
    }
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
  refs.startBtn.removeEventListener("click", onStartBtnClick);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
