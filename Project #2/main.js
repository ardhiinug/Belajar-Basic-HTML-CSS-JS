const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
  if (input.value === "") {
    alert("Anda Belum Menulis Sesuatu, Silahkan Tulis Sesuatu!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveList();
}

list.addEventListener(
  "click",
  function (x) {
    if (x.target.tagName === "LI") {
      x.target.classList.toggle("checked");
      saveList();
    } else if (x.target.tagName === "SPAN") {
      x.target.parentElement.remove();
      saveList();
    }
  },
  false
);

function saveList() {
  localStorage.setItem("data", list.innerHTML);
}
function showList() {
  list.innerHTML = localStorage.getItem("data");
}
showList();
