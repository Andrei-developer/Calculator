function items(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deletLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

const changeColor = document.getElementById("change");
const btnChange = document.getElementById("btnChange");
const linkStyle = document.getElementById("change-color");

changeColor.addEventListener("click", function () {
  const classAtribute = changeColor.getAttribute("class");
  if (classAtribute === "change-2") {
    btnChange.classList.remove("dark");
    btnChange.classList.add("ligth");
    changeColor.classList.remove("change-2");
    changeColor.classList.add("change-1");
  } else {
    btnChange.classList.remove("ligth");
    btnChange.classList.add("dark");
    changeColor.classList.remove("change-1");
    changeColor.classList.add("change-2");
  }

  const linkAtribute = linkStyle.getAttribute("href");
  if (linkAtribute === "assets/css/dark-ligth/ligth.css") {
    setTimeout(() => {
      linkStyle.setAttribute("href", "assets/css/dark-ligth/dark.css");
    }, 500);
  } else {
    setTimeout(() => {
      linkStyle.setAttribute("href", "assets/css/dark-ligth/ligth.css");
    }, 500);
  }
});

// changeColor.addEventListener("click", function () {
//   btnChange.classList.remove("dark");
//   btnChange.classList.add("ligth");
//   changeColor.classList.remove("change-2");
//   changeColor.classList.add("change-1");
// });

// changeColor.addEventListener("dblclick", function () {
//   btnChange.classList.remove("ligth");
//   btnChange.classList.add("dark");
//   changeColor.classList.remove("change-1");
//   changeColor.classList.add("change-2");
// });

// btnChange.addEventListener("dblclick", function () {
//   setTimeout(() => {
//     linkStyle.setAttribute("href", "assets/css/dark-ligth/ligth.css");
//   }, 500);
// });
