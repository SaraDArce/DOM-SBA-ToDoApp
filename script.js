function addTask(event) {
  if (event.key === "Enter") {
    const taskInput = document.querySelector(".task");
    const task = taskInput.value.trim();

    if (task !== "") {
      const table = document.getElementById("todoTable");
      const row = table.insertRow(-1);
      const taskCell = row.insertCell(0);

      taskCell.innerHTML = task;
      taskInput.value = "";
    }
  }
}
