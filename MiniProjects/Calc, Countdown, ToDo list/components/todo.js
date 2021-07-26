//Adding variables

const addMessage = document.querySelector(".message"),
  addButton = document.querySelector(".add"),
  todo = document.querySelector(".todo"),
  del = document.querySelectorAll(".btn");

//Saving changes from todo list in localStorage

const localChange = () => {
  localStorage.setItem("todo", JSON.stringify(toDoList));
};

//Refresh data for todo list

let toDoList = JSON.parse(localStorage.getItem("todo")) || [];
displayMessages();

//Function for displaying current notes in list

function displayMessages() {
  let displayMessage = "";
  toDoList.forEach(function (item, i) {
    displayMessage += `
    <li class='list p${i}' >
    <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
    <label for="item_${i}" class='line'>${item.todo}</label>
    </input>
    <button id="item_${i}" class='btn' onclick={deleteItem()} >X</button>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

//Function for deleting note

function deleteItem() {
  const current = event.target.id.slice(5, 6);
  if (toDoList.length === 1) {
    toDoList = [];
    localChange();
    document.querySelector(`.p${current}`).remove();
    displayMessages();
  } else {
    let edited = [...toDoList];
    edited.splice(current, 1);
    toDoList = edited;
    localChange();
    displayMessages();
  }
}

//Adding to save data by key 'enter'

addMessage.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const newTodo = {
      todo: addMessage.value,
      checked: false,
    };
    if (document.querySelector(".message").value) toDoList.push(newTodo);

    displayMessages();
    localChange();
    document.querySelector(".message").value = "";
  }
});

//Adding to save data by click 'add' button

addButton.addEventListener("click", function () {
  const newTodo = {
    todo: addMessage.value,
    checked: false,
  };
  if (document.querySelector(".message").value) toDoList.push(newTodo);

  displayMessages();
  localChange();
  document.querySelector(".message").value = "";
});

//Saving checked items

todo.addEventListener("change", function () {
  const id = event.target.id.slice(5, 6);
  toDoList[id].checked
    ? (toDoList[id].checked = false)
    : (toDoList[id].checked = true);
  localChange();
});
