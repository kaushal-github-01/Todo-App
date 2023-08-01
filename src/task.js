const taskControl = () => {
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
};

export default taskControl;
