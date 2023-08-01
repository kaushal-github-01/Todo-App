const taskControl = (tasks) => {
  const formDiv = document.getElementById("formDiv");
  const main = document.querySelector("main");

  const checkbox = main.querySelectorAll("input");
  checkbox.forEach((checkBox, index) => {
    const taskHeading = checkBox.nextElementSibling;
    const localStorageKey = `task_${index}`;

    const isChecked = localStorage.getItem(localStorageKey) === "Yes";
    if (isChecked) {
      taskHeading.style.textDecoration = "line-through";
      checkBox.checked = true;
    } else {
      taskHeading.style.textDecoration = "none";
      checkBox.checked = false;
    }

    checkBox.addEventListener("click", () => {
      if (taskHeading.style.textDecoration == "line-through") {
        taskHeading.style.textDecoration = "none";
        localStorage.setItem(localStorageKey, "No");
      } else {
        taskHeading.style.textDecoration = "line-through";
        localStorage.setItem(localStorageKey, "Yes");
      }
    });
  });

  const viewButton = main.querySelectorAll("button[type='view']");
  viewButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log(button, index, tasks[index].name, tasks[index].category);

      formDiv.children[0].reset();
      formDiv.style.display = "flex";

      const taskName = formDiv.querySelector("input[type='text']");
      const taskDescription = formDiv.querySelector("textarea");
      const taskDate = formDiv.querySelector("input[type='date']");
      const taskTime = formDiv.querySelector("input[type='time']");
      const taskCategory = formDiv.querySelector("select");

      taskName.value = tasks[index].name;
      taskDescription.value = tasks[index].description;
      taskDate.value = tasks[index].date;
      taskTime.value = tasks[index].time;
      taskCategory.value = tasks[index].category;

      taskName.disabled = true;
      taskDescription.disabled = true;
      taskDate.disabled = true;
      taskTime.disabled = true;
      taskCategory.disabled = true;

      const submitButton = formDiv.querySelector("button[type='submit']");
      submitButton.style.display = "none";
    });
  });
};

export default taskControl;