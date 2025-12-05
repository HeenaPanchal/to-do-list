const btn = (document.getElementById("btn").onclick = function () {
  const inputValue = document.getElementById("input").value;
  if (inputValue == "") {
    alert("Please add the task");
    return;
  }

  const taskLists = document.querySelector(".taskLists");
  taskLists.innerHTML += `<div class="task"><p class="task-title" onclick="this.classList.toggle('completed')">${inputValue}</p> <button class="delete" onclick="this.parentNode.remove()">delete</button></div>`;
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
});
