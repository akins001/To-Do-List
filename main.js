function addTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("todo-list");
  
    if (taskInput.value === "") {
      window.alert("Please Enter A Task");
    } else {
      let taskText = taskInput.value.toLowerCase();
  
      if (taskText.includes("suicide") || taskText.includes("die") ) {
        window.location.href = "https://lifeline-intl.com/";
        return;
      }
  
      const taskListItem = document.createElement("li");
      taskListItem.textContent = taskInput.value;
      taskList.appendChild(taskListItem);
      taskInput.value = "";
    }
  }
  
  document.getElementById("todo-form").addEventListener("submit", addTask);
  