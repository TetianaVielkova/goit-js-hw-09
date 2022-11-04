

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeBGColor)
stopBtn.addEventListener('click', intervalDelete)

let intervalID = null;
const isActive = false;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBGColor() {
    if(isActive){
        return;
    }
    intervalID = setInterval(()=>{
        console.log(getRandomHexColor())
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}


function intervalDelete() {
    clearInterval(intervalID);
}

