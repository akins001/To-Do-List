function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "items-center");
    const span = document.createElement("span");
    span.innerText = taskText;
    const button = document.createElement("button");
    button.classList.add("text-gray-400", "hover:text-red-500");
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
    button.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(span);
    li.appendChild(button);
    document.getElementById("todo-list").appendChild(li);
    taskInput.value = "";
    if (taskText.includes("suicide") || taskText.includes("die") ) {
      window.location.href = "https://lifeline-intl.com/";
      return;
    }
  }
  // prevent form submission
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  todoForm.addEventListener("submit", function (event) {
    addTask();
    event.preventDefault();
  });
});
