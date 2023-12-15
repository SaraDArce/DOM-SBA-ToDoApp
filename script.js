// Cache at least one element using selectElementById
const app = document.getElementById("app");
const userHome = document.querySelector(".user-page");

// Use the relationship to navigate
const userPage = document.querySelector(".user-page");
const todaysTasks = userPage.querySelector(".todays-tasks");
const todaysTodosHeader = userPage.querySelector(".todays-todos");

// Iterate over a collection of tasks
const taskItems = todaysTasks.querySelectorAll("li");

const state = {
  username: "JaneDoe",
  projects: ["Completing this SBA", "Saving the World"],
  tasks: ["walk the dog", "do laundry", "go shopping"],
};

function renderUserHome() {
  userHome.innerHTML = `
      <h4 class="username">${state.username}</h4>
      <div><h5 class="projects">${state.projects.join(
        ", "
      )}</h5></div> <!-- Join projects array -->
      <div><ul class="tasks">
         ${state.tasks
           .map((task) => {
             return `<li>${task}</li>`;
           })
           .join(" ")}
        </ul>
      </div>
    `;
}

renderUserHome();

const projectToBeAdded = "Christmas Dinner for 20";

function handleAddProject() {
  state.projects.push(projectToBeAdded);
  renderUser();
}

document.querySelector("button").addEventListener("click", handleAddProject);

// Template
const templateFragment = document.createDocumentFragment();
const templateItem = document.createElement("li");
templateItem.textContent = "Template Task";
templateFragment.appendChild(templateItem.cloneNode(true));

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
    // Modify HTML or text content of at least one element in response to user interaction
    function handleButtonClick() {
      const newElement = document.createElement("div"); // Create new element
      newElement.innerHTML = "Button Clicked!"; // Modify content
      app.appendChild(newElement); // Append new element to app
    }

    document
      .querySelector("button")
      .addEventListener("click", handleButtonClick);

    // Modify the style and/or CSS classes of an element in response to user interactions using the style or classList property
    function handleMouseOver(event) {
      event.target.style.backgroundColor = "lightblue";
    }

    function handleMouseOut(event) {
      event.target.style.backgroundColor = "";
    }

    newElement.addEventListener("mouseover", handleMouseOver);
    newElement.addEventListener("mouseout", handleMouseOut);

    // Modify at least one attribute of an element in response to user interaction.
    function handleInput(event) {
      if (event.target.value.length > 5) {
        event.target.setAttribute("maxlength", "5");
      } else {
        event.target.removeAttribute("maxlength");
      }
    }

    const inputField = document.querySelector(".task");
    inputField.addEventListener("input", handleInput);

    // Register at least two different event listeners and create the associated event handler functions.
    function handleTaskClick(event) {
      event.target.classList.toggle("completed");
    }

    function handleTaskDoubleClick(event) {
      event.target.remove();
    }

    taskItems.forEach((item) => {
      item.addEventListener("click", handleTaskClick);
      item.addEventListener("dblclick", handleTaskDoubleClick);
    });

    // Use at least two Browser Object Model (BOM) properties or methods.
    console.log("Window inner width:", window.innerWidth);
    console.log("Document URL:", document.URL);

    // Include at least one form and/or input with HTML attribute validation.
    const formInput = document.querySelector(".task");
    formInput.setAttribute("required", true);

    // Include at least one form and/or input with DOM event-based validation.
    // Example: Adding an event listener for custom validation.
    formInput.addEventListener("blur", function () {
      if (formInput.value.length < 3) {
        formInput.setCustomValidity("Task name must be at least 3 characters.");
      } else {
        formInput.setCustomValidity("");
      }
    });
  }
}
