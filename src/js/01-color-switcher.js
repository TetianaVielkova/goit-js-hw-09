

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBGColor)
stopBtn.addEventListener('click', intervalDelete)

let intervalID = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBGColor() {

    intervalID = setInterval(()=>{
        console.log(getRandomHexColor())
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
}


function intervalDelete() {
    clearInterval(intervalID);
    stopBtn.disabled = false;
}

