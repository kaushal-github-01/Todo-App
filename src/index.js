const addTaskButton = document.querySelector("nav button");
addTaskButton.addEventListener("click", () => {
  const formDiv = document.getElementById("formDiv");

  formDiv.children[0].reset();
  formDiv.style.display = "flex";

  const taskName = formDiv.querySelector("input[type='text']");
  const taskDescription = formDiv.querySelector("textarea");
  const taskDate = formDiv.querySelector("input[type='date']");
  const taskTime = formDiv.querySelector("input[type='time']");
  const taskCategory = formDiv.querySelector("select");

  taskName.disabled = false;
  taskDescription.disabled = false;
  taskDate.disabled = false;
  taskTime.disabled = false;
  taskCategory.disabled = false;

  const submitButton = formDiv.querySelector("button[type='submit']");
  submitButton.style.display = "inline-block";
});

import formControl from "./form";
formControl();
