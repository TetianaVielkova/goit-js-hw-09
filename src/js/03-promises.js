import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector("[name = 'delay']");
const  step = document.querySelector("[name = 'step']");
const  amount = document.querySelector("[name = 'amount']");


form.addEventListener('submit', onSubmit);


function onSubmit() {
  e.preventDefault();
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);


  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.success(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
      delayValue += stepValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}