import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ timeout: 3000 });

const form = document.querySelector('.form');
form.addEventListener('submit', runPromices);

function runPromices(submitObj) {
  console.clear();
  submitObj.preventDefault();
  const firstDelayField = Number(submitObj.target.elements[0].value);
  const delayStepField = Number(submitObj.target.elements[1].value);
  const runTimes = Number(submitObj.target.elements[2].value);

  let sumCounter = 0;
  let i = 0;
  while (i < runTimes) {
    sumCounter = firstDelayField + delayStepField * i;

    startPromice(i, sumCounter);
    i++;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
function startPromice(i, sumCounter) {
  createPromise(i + 1, sumCounter)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
