let list = document.getElementById("theUl");
list.addEventListener("click", strickeTrhoughElemet);

function strickeTrhoughElemet(click_event) {
  if (click_event.target.tagName === "LI") {
    //click_event.target.style.visibility = 'hidden';
    click_event.target.classList.toggle("checked");
  }
}

document.getElementById("btn").addEventListener("click", addNewElement);

function addNewElement() {
  let li = document.createElement("li");
  let inputText = document.getElementById("newTask" ).value;
  if (inputText == "") {
    alert("Oopps TODO task should be provided!");
  } else {
    li.innerHTML = inputText;
    document.getElementById("theUl").appendChild(li);
    document.getElementById("newTask" ).value = "";
  }
}


document.getElementById("deletbtn").addEventListener("click", removeElement);
function removeElement(theUl) {
	// Removes an element from the document.
	 let element = document. getElementById(theUl);
	 element. parentNode. removeChild(element);
}