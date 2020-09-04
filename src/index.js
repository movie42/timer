import "./styles.css";

const eventOutput = document.querySelector(".eventOutput");
const timeTitle = eventOutput.querySelector(".timeTitle");
const restartTitle = eventOutput.querySelector(".restartTitle");
const form = document.querySelector(".dateForm");
const dates = document.getElementById("dates");

// 시간 입력 받아 출력하기
let data = [];

const restart = () => {
  form.classList.add("on");
  eventOutput.classList.remove("on");
  data = [];
  clearInterval(start);
};

const start = () => {
  timer(data);
};

const timer = (...date) => {
  const currentTime = new Date();
  const selectTime = new Date(date);
  const restTime = selectTime - currentTime;
  const seconds = Math.floor((restTime / 1000) % 60);
  const mins = Math.floor((restTime / (1000 * 60)) % 60);
  const hours = Math.floor((restTime / (1000 * 60 * 60)) % 24);
  const dayes = Math.floor(restTime / (1000 * 60 * 60 * 24));
  outPutTime(dayes, hours, mins, seconds);
};

const outPutTime = (days, hours, mins, secs) => {
  timeTitle.innerText = `${days}일 ${hours}시간 ${mins}분 ${secs}초 남았습니다.`;
  setInterval(start, 1000);
};

const handleSubmit = (event) => {
  event.preventDefault();
  data = [];
  const selectDates = dates.valueAsDate;
  if (selectDates !== null) {
    data.push(selectDates);
    form.classList.remove("on");
    eventOutput.classList.add("on");
    start();
  }
};

const init = () => {
  form.classList.add("on");
  form.addEventListener("submit", handleSubmit);
  restartTitle.addEventListener("click", restart);
};

init();
