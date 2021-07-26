//Taking DOM elements
let year = document.querySelector(".year"),
  month = document.querySelector(".month"),
  day = document.querySelector(".day"),
  submit = document.querySelector(".button-send"),
  days = document.querySelector("#days"),
  hours = document.querySelector("#hours"),
  minutes = document.querySelector("#minutes"),
  seconds = document.querySelector("#seconds");

//Amount of seconds left
restTime = 0;

//Show current time left

function showTime() {
  restTime--;
  countTime();
}

//Expected date from input

function expectedDate() {
  return new Date(`${year.value},${month.value},${day.value}`);
}

//Add listener to button 'Submit'

submit.addEventListener("click", () => {
  let currenDate = new Date();
  restTime = (expectedDate() - currenDate) / 1000;
});

//Counting days, hours, minutes, seconds

function countTime() {
  days.innerText = Math.floor(restTime / 86400);
  hours.innerText = Math.floor(
    (restTime - parseInt(days.innerText) * 86400) / 3600
  );
  minutes.innerText = Math.floor(
    (restTime - Math.floor(days.innerText * 86400 + hours.innerText * 3600)) /
      60
  );
  seconds.innerText = Math.floor(
    restTime -
      days.innerText * 86400 -
      hours.innerText * 3600 -
      minutes.innerText * 60
  );
}
setInterval(() => {
  if (restTime > 0) showTime();
}, 1000);
