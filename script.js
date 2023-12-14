function toggleSubtasks() {
  const subtaskHeader = document.getElementById("subtaskHeader");
  const subtaskInput = document.querySelector(".subtask");

  if (subtaskHeader.style.display === "none") {
    subtaskHeader.style.display = "table-cell";
    subtaskInput.style.display = "block";
  } else {
    subtaskHeader.style.display = "none";
    subtaskInput.style.display = "none";
  }
}

function addTask(event) {
  if (event.key === "Enter") {
    const taskInput = document.querySelector(".task");
    const task = taskInput.value.trim();

    // Added same for subtask
    const subtaskInput = document.querySelector(".subtask");
    const subtask = subtaskInput.value.trim();

    if (task !== "") {
      const table = document.getElementById("todoTable");
      const row = table.insertRow(-1);
      const taskCell = row.insertCell(0);

      //
      const subtaskCell = row.insertCell(1);

      taskCell.innerHTML = task;

      if (subtaskInput.style.display !== "none") {
        subtaskCell.innerHTML = subtask;
      }
      taskInput.value = "";
      subtaskInput.value = "";
    }
  }
}
