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

function toggleNotes() {
  const notesHeader = document.getElementById("notesHeader");
  const notesInput = document.querySelector(".notes");

  if (notesHeader.style.display === "none") {
    notesHeader.style.display = "table-cell";
    notesInput.style.display = "block";
  } else {
    notesHeader.style.display = "none";
    notesInput.style.display = "none";
  }
}

function addTask(event) {
  if (event.key === "Enter") {
    const taskInput = document.querySelector(".task");
    const task = taskInput.value.trim();

    // Added same for subtask
    const subtaskInput = document.querySelector(".subtask");
    const subtask = subtaskInput.value.trim();

    // Same for notes
    const notesInput = document.querySelector(".notes");
    const notes = notesInput.value.trim();

    if (task !== "") {
      const table = document.getElementById("todoTable");
      const row = table.insertRow(-1);
      const taskCell = row.insertCell(0);

      // Add rows for optional subtasks and notes
      const subtaskCell = row.insertCell(1);
      const notesCell = row.insertCell(2);

      taskCell.innerHTML = task;

      // Added default display of none for subtasks and notes
      if (subtaskInput.style.display !== "none") {
        subtaskCell.innerHTML = subtask;
      }

      if (notesInput.style.display !== "none") {
        notesCell.innerHTML = notes;
      }

      taskInput.value = "";
      subtaskInput.value = "";
    }
  }
}
