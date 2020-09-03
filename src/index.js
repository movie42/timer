import "./styles.css";

const eventOutput = document.querySelector(".eventOutput");
const eventContainer = eventOutput.querySelector("h1");
const form = document.querySelector("form");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

// 시간 입력 받아 출력하기
const timer = (year, month, day) => {
  const currentTime = new Date();
  const selectTime = new Date(`${month} ${day}, ${year}`);
  const restTime = selectTime - currentTime;
};

// 입력란 공백으로 남겨놓고 Start나 엔터를 누를시에 경고메시지 표시하기

//Start 버튼과 출력 디자인하기

const handleSubmit = (event) => {
  event.preventDefault();
  const yearValue = year.value;
  const monthValue = month.value;
  const dayValue = day.value;
  timer(yearValue, monthValue, dayValue);
};

const init = () => {
  form.addEventListener("submit", handleSubmit);
};

init();
