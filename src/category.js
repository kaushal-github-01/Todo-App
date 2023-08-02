const categoryControl = (tasks) => {
  const categoryDisplay = document.querySelector("nav select");
  const main = document.querySelector("main");

  categoryDisplay.addEventListener("change", () => {
    localStorage.setItem("currentCategory", `${categoryDisplay.value}`);

    let currentCategory = categoryDisplay.value;
    let matchedTaskName = [];
    tasks.forEach((task) => {
      if (task.category == currentCategory) {
        matchedTaskName.push(task.name);
      }
    });

    for (let i = 0; i < tasks.length; i++) {
      if (matchedTaskName.length == 0) {
        main.children[i].style.display = "flex";
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
  });

  categoryDisplay.value = localStorage.getItem("currentCategory");

  let currentCategory = localStorage.getItem("currentCategory");
  let matchedTaskName = [];
  tasks.forEach((task) => {
    if (task.category == currentCategory) {
      matchedTaskName.push(task.name);
    }
  });

  for (let i = 0; i < tasks.length; i++) {
    if (matchedTaskName.length == 0) {
      main.children[i].style.display = "flex";
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
