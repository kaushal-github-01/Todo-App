const addTaskButton = document.querySelector("nav button");
addTaskButton.addEventListener("click", () => {
  const formDiv = document.getElementById("formDiv");
  formDiv.style.display = "flex";
});

import formControl from "./form";
formControl();
