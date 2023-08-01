import taskControl from "./task";

const formControl = () => {
  const main = document.querySelector("main");
  const submitButton = formDiv.querySelector("button[type='submit']");
  const cancelButton = formDiv.querySelector("button[type='cancel']");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let task = {
      name: formDiv.querySelector("input[type='text']").value,
      description: formDiv.querySelector("textarea").value,
      date: formDiv.querySelector("input[type='date']").value,
      time: formDiv.querySelector("input[type='time']").value,
      category: formDiv.querySelector("select").value,
    };

    tasks.push(task);
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);

    formDiv.style.display = "none";
    window.location.reload();
  });

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    main.innerHTML += `
    <div id="task">
      <div>
        <input type='checkbox'>
        <h2>${task.name}</h2>
      </div>
      <div>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
    `;
  });
  taskControl();

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    formDiv.style.display = "none";
  });
};

export default formControl;
