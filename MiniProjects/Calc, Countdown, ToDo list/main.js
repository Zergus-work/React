// Constructor function for adding to current element listener to hide all elements instead of clicked

class Display {
  listen(item, clas) {
    item.addEventListener("click", function () {
      const hidden = document.querySelector(clas);
      if (hidden.getAttribute("id") === "hidden") {
        document.querySelectorAll(".main").forEach((x) => {
          x.setAttribute("id", "hidden");
        });
        hidden.setAttribute("id", "display");
      } else {
        hidden.setAttribute("id", "hidden");
      }
    });
  }
}
//Choosing elements from DOM

const showDate = document.querySelector(".showDate"),
  showCalc = document.querySelector(".showCalc"),
  calendar = new Display(),
  calculator = new Display();

//Using construction function of elements that need to be clickable

calendar.listen(showDate, ".container-count");
calculator.listen(showCalc, ".container-calc");
