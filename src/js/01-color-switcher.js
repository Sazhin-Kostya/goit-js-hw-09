
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;


start.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    start.disabled = true;
    stop.disabled = false;
});

stop.addEventListener("click", () => {
    clearInterval(timerId);
    start.disabled = false;
  stop.disabled = true;
});

