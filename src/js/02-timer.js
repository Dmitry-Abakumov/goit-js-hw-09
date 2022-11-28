import flatpickr from 'flatpickr';
import toastr from 'toastr';

import './toastr-config';
import 'flatpickr/dist/flatpickr.min.css';
import 'toastr/build/toastr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let futureDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (Date.now() > new Date(selectedDates).getTime()) {
      toastr.error('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', '');

      return;
    }

    refs.startBtn.removeAttribute('disabled');
    futureDate = selectedDates;
  },
};

flatpickr('#datetime-picker', options);

const render = ({ days, hours, minutes, seconds }) => {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
};

const onStartBtnClick = e => {
  if (timerId) return;
  timerId = setInterval(() => {
    const remainingTime = new Date(futureDate).getTime() - Date.now();

    render(convertMs(remainingTime));
  }, 1000);
};

refs.startBtn.addEventListener('click', onStartBtnClick);

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
