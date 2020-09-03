import "./styles.css";

const eventOutput = document.querySelector(".eventOutput");
const eventContainer = eventOutput.querySelector("h1");
const form = document.querySelector("form");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

// 시간 입력 받아 출력하기
let array = [];

const timer = () => {
  const currentTime = new Date();
  const selectTime = new Date(`${array[1]} ${array[2]}, ${array[0]}`);
  const restTime = selectTime - currentTime;
  const seconds = Math.floor((restTime / 1000) % 60);
  const mins = Math.floor((restTime / (1000 * 60)) % 60);
  const hours = Math.floor((restTime / (1000 * 60 * 60)) % 24);
  const dayes = Math.floor(restTime / (1000 * 60 * 60 * 24));
  outPutTime(dayes, hours, mins, seconds);
};

const outPutTime = (days, hours, mins, secs) => {
  eventContainer.innerText = `${days}일 ${hours}시간 ${mins}분 ${secs}초 남았습니다.`;
  setInterval(timer, 1000);
};

// 입력란 공백으로 남겨놓고 Start나 엔터를 누를시에 경고메시지 표시하기

//Start 버튼과 출력 디자인하기

const handleSubmit = (event) => {
  event.preventDefault();
  const yearValue = year.value;
  const monthValue = month.value;
  const dayValue = day.value;
  array.push(yearValue, monthValue, dayValue);
  timer();
};

const init = () => {
  form.addEventListener("submit", handleSubmit, timer);
};

init();
