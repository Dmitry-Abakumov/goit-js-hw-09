import toastr from 'toastr';

import './toastr-config';
import 'toastr/build/toastr.min.css';

const inputDataObj = {};
let timeoutId = null;

refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise(
    (resolve, reject) => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    },
    position,
    delay
  );
}

const onElFormBlur = e => {
  inputDataObj[e.target.name] = e.target.valueAsNumber;
  console.log(inputDataObj);
};

const promiseResultProcessing = (position, delay) => {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      toastr.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      toastr.error(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });
};

const onFormSubmit = e => {
  const { delay, step, amount } = inputDataObj;
  e.preventDefault();

  if (timeoutId || amount < 0) return;

  let nextPromiseDelay = delay;

  for (let i = 1; i < amount + 1; i += 1) {
    timeoutId = setTimeout(
      promiseResultProcessing,
      i > 1 ? (nextPromiseDelay += step) : delay,
      i,
      nextPromiseDelay
    );

    timeoutId = null;
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('focusout', onElFormBlur);
