const refs = {
  body: document.body,
  btnStart: document.querySelector("[data-start]"),
  btnStop: document.querySelector("[data-stop]"),
};

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener("click", onStartBtnClick);
refs.btnStop.addEventListener("click", onStopBtnClick);

refs.btnStop.setAttribute("disabled", true);

function onStartBtnClick() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);

  refs.btnStart.setAttribute("disabled", true);
  if (refs.btnStop.hasAttribute("disabled")) {
    refs.btnStop.removeAttribute("disabled");
  }
}

function onStopBtnClick() {
  refs.btnStart.removeAttribute("disabled");
  refs.btnStop.setAttribute("disabled", true);
  clearInterval(intervalId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
