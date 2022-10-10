import Notiflix from "notiflix";

const refs = {
  form: document.querySelector(".form"),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener("input", onInputChange);
refs.form.addEventListener("submit", onBtnSubmit);

const onSuccess = ({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onError = ({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

const formFields = {};

function onInputChange(event) {
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  formFields.delay = delay.value;
  formFields.step = step.value;
  formFields.amount = amount.value;

  return formFields;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onBtnSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < formFields.amount; i += 1) {
    const commonDelay = Number(formFields.delay) + Number(formFields.step) * i;
    createPromise(i + 1, commonDelay)
      .then(onSuccess)
      .catch(onError);
  }
}
