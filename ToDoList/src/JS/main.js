//Fill static tasks to the todo list
function pupulateStaticValues() {
  const btnText = "DELETE";
  let ul_container = document.getElementById("theUl");
  let tasks = [
    "Skjutsa barnen",
    "Skola",
    "Handla",
    "Hämta barnen",
    "Plugga",
    "Sova",
  ];
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.id = "remove-btn-" + i;
    btn.className = "remove-btn";
    btn.innerHTML = btnText;
    li.innerHTML = tasks[i];
    li.appendChild(btn);
    ul_container.appendChild(li);
  }
}
pupulateStaticValues();

//change tasks when done
let list = document.getElementById("theUl");
list.addEventListener("click", changeTasksToDone);

function changeTasksToDone(click_event) {
  if (click_event.target.tagName === "LI") {
    let listOflis = document.getElementById("theUl").getElementsByTagName("li");
    for (let i = 0; i < listOflis.length; i++) {
      if (click_event.target.innerText === listOflis[i].innerText) {
        click_event.target.style.background = "#2a9d8f";
        let li = listOflis[i];
        let btn = document.createElement("button");
        btn.id = "remove-btn-" + i;
        btn.className = "remove-btn";
        btn.innerHTML = "DELETE";
        li.innerHTML = "DONE";
        li.appendChild(btn);
        break;
      }
    }
  }
}

//Add new tasks to the todo list
document.getElementById("btn").addEventListener("click", function () {
  let inputText = document.getElementById("newTask").value;
  if (inputText.trim() == "") {
    alert("Oopps TODO task should be provided!");
  } else {
    let btn = document.createElement("button");
    btn.id =
      "remove-btn-" +
      document.getElementById("theUl").getElementsByTagName("li").length;
    btn.className = "remove-btn";
    btn.innerHTML = "DELETE";

    let li = document.createElement("li");
    li.innerHTML = inputText;

    document.getElementById("newTask").value = "";
    li.appendChild(btn);
    document.getElementById("theUl").appendChild(li);
  }
});

let ulElements = document.getElementById("theUl");

ulElements.addEventListener("click", function (evt) {
  let listOfButtons = document
    .getElementById("theUl")
    .getElementsByTagName("button");
  let listOfLis = document.getElementById("theUl").getElementsByTagName("li");

  for (let i = 0; i < listOfButtons.length; i++) {
    console.log(evt.target.id);
    if (evt.target.id === listOfButtons[i].id) {
      listOfLis[i].style.display = "none";
      evt.target.style.display = "none";
      break;
    }
  }
});
