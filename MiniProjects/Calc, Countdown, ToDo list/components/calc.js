//Choosing elements from DOM

const input = document.querySelector(".calc-input"),
  numbers = document.querySelectorAll("#bt"),
  operation = document.querySelectorAll("#operation"),
  previous = document.querySelector(".previous-operated"),
  current = document.querySelector(".current-operated");

//Current pressed calculating button

let curBtn, currentAnswer;

//Adding listeners operational buttons

operation.forEach(function (button, f) {
  button.addEventListener("click", function () {
    curBtn = button;
    return operational(button);
  });
});

//Working of calculator

function compute(button) {
  let prev = +previous.innerText.slice(0, -1),
    cur = +current.innerText;
  if (isNaN(prev) || isNaN(cur)) return;

  let result;

  switch (button.innerText) {
    case "+":
      result = prev + cur;
      break;
    case "-":
      result = prev - cur;
      break;
    case "*":
      result = prev * cur;
      break;
    case "/":
      result = prev / cur;
      break;
    default:
      return;
  }
  currentAnswer = result;
}

//Checking of empty upper string when we pushing calculating button to add math symbol

function operational(button) {
  if (/.[*\+\/-]\b/.test(previous.innerText)) return;
  if (current.innerText === "" && previous.innerText.length === 0) return;
  if (current.innerText === "" && previous.innerText.length > 0)
    previous.innerText += button.innerText;
  if (previous.innerText.length == "") {
    previous.innerText = current.innerText + button.innerText;
    current.innerText = "";
  }
  if (previous.innerText.length > 0 && current.innerText.length > 0)
    compute(button);
}

//Limitation gor dot usage and adding listeners to number buttons

numbers.forEach((button) => {
  button.addEventListener("click", function () {
    if (
      /[*\+\/-]/.test(previous.innerText) == false &&
      previous.innerText.length > 0
    )
      return;
    if (event.target.innerText === "." && current.innerText.includes("."))
      return;

    current.innerText += event.target.innerText;
  });
});

//Function for adding listener to element

function addListener(i, f) {
  document.querySelector(i).addEventListener("click", f);
}

//Adding listeners to buttons

addListener("#clear", function () {
  current.innerText = "";
  previous.innerText = "";
  result = "";
});

addListener("#del", function () {
  current.innerText = current.innerText.slice(0, current.innerText.length - 1);
});

addListener("#sQrt", function () {
  if (current.innerText && previous.innerText) return;
  if (current.innerText && previous.innerText === "") {
    previous.innerText = Math.sqrt(current.innerText).toFixed(5);
    current.innerText = "";
  } else {
    previous.innerText = Math.sqrt(previous.innerText).toFixed(5);
  }
});

addListener("#answer", function () {
  compute(curBtn);
  previous.innerText = currentAnswer;
  current.innerText = "";
});
