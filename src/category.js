const categoryControl = (tasks) => {
  const categoryDisplay = document.querySelector("nav select");
  const main = document.querySelector("main");

  categoryDisplay.addEventListener("change", () => {
    localStorage.setItem("currentCategory", `${categoryDisplay.value}`);
    window.location.reload();
  });

  categoryDisplay.value = localStorage.getItem("currentCategory") || "All";

  let currentCategory = localStorage.getItem("currentCategory") || "All";
  console.log(currentCategory);
  let matchedTaskName = [];
  tasks.forEach((task) => {
    console.log(task);
    if (task.category == currentCategory) {
      matchedTaskName.push(task.name);
    }
  });

  console.log(matchedTaskName, matchedTaskName.length);
  console.log(tasks.length);
  for (let i = 0; i < tasks.length; i++) {
    if (matchedTaskName.length == 0) {
      console.log(tasks[i].category);
      if (currentCategory == "All") {
        main.children[i].style.display = "flex";
      } else {
        main.children[i].style.display = "none";
      }
    } else {
      main.children[i].style.display = "none";
      let taskHeading = main.children[i].querySelector("h2").textContent;
      matchedTaskName.forEach((matchedName) => {
        if (matchedName == taskHeading) {
          main.children[i].style.display = "flex";
        }
      });
    }
  }
};

export default categoryControl;
