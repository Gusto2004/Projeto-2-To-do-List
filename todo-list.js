const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const counter = document.querySelector("#counter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounter() {
  const pending = tasks.filter((task) => !task.completed).length;

  if (tasks.length === 0) {
    counter.textContent = "No tasks yet.";
  } else if (pending === 0) {
    counter.textContent = "All done! 🎉";
  } else if (pending === 1) {
    counter.textContent = "1 task left";
  } else {
    counter.textContent = `${pending} tasks left`;
  }
}

function renderTasks() {
  list.replaceChildren();

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");
    li.dataset.id = task.id;

    // textContent (not innerHTML) so the task text is never treated as HTML
    const text = document.createElement("span");
    text.className = "task__text";
    text.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "task__actions";

    const editButton = document.createElement("button");
    editButton.className = "task__edit";
    editButton.setAttribute("aria-label", "Edit task");
    editButton.textContent = "✎";

    const deleteButton = document.createElement("button");
    deleteButton.className = "task__delete";
    deleteButton.setAttribute("aria-label", "Delete task");
    deleteButton.textContent = "✕";

    actions.append(editButton, deleteButton);
    li.append(text, actions);
    list.appendChild(li);
  });

  updateCounter();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  tasks.push({
    id: Date.now(),
    text: taskText,
    completed: false,
  });

  saveTasks();
  renderTasks();
  input.value = "";
});

list.addEventListener("click", function (event) {
  const li = event.target.closest(".task");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (event.target.classList.contains("task__delete")) {
    // Delete
    tasks = tasks.filter((task) => task.id !== id);
  } else if (event.target.classList.contains("task__edit")) {
    // Edit
    const task = tasks.find((task) => task.id === id);
    if (task) {
      const newText = prompt("Edit task:", task.text);
      if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();
      }
    }
  } else {
    // Toggle completed
    const task = tasks.find((task) => task.id === id);
    if (task) task.completed = !task.completed;
  }

  saveTasks();
  renderTasks();
});

renderTasks();

// ===== THEME (remembered between visits) =====
const themeButton = document.querySelector("#theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.remove("dark");
  themeButton.textContent = "🌙";
} else {
  body.classList.add("dark");
  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
