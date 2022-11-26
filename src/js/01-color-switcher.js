let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const onStartBtnClick = e => {
  e.currentTarget.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

const onStopBtnClick = e => {
  e.currentTarget.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');

  clearInterval(intervalId);
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
