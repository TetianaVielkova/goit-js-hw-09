import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
const timerFieldDays = document.querySelector('[data-days]');
const timerFieldHours = document.querySelector('[data-hours]');
const timerFieldMinutes = document.querySelector('[data-minutes]');
const timerFieldSeconds = document.querySelector('[data-seconds]');
const timerInput = document.querySelector('#datetime-picker');
const timerStyle = document.querySelector('.timer');
const fieldStyle = document.querySelectorAll('.field');


btnStart.addEventListener('click', onTimerStart);


const defaultDate = Date.now();
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if((defaultDate - selectedDates[0]) < 0) {
            
            btnStart.disabled = false;
        } else {
            btnStart.disabled = true;
            Notiflix.Notify.warning("Please choose a date in the future");
            timeout: 1000;
            width: '360px';
            svgSize: '120px';
        }
        
    },
};


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function onTimerStart() {
    const selectedDate = flatpickrTimer.selectedDates[0];

    timerId = setInterval(() => {
        const startTime = new Date();
        const differenceTime = selectedDate - startTime;
        btnStart.disabled = true;

        if (differenceTime < 0) {
            clearInterval(timerId);
            return;
        }
        updateClock(convertMs(differenceTime));
        }, 1000);
}

function updateClock({ days, hours, minutes, seconds }) {
    timerFieldDays.textContent = `${days}`;
    timerFieldHours.textContent = `${hours}`;
    timerFieldMinutes.textContent = `${minutes}`;
    timerFieldSeconds.textContent = `${seconds}`;
};


const flatpickrTimer = flatpickr(timerInput, options);




    timerStyle.style.display = 'flex';
    timerStyle.style.marginTop = '75px';

    timerStyle.style.fontSize = '40px';
    timerStyle.style.textTransform = 'uppercase';

    fieldStyle.forEach(element => {
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.padding = '20px';
    element.style.outline = '2px solid #212121';
});


