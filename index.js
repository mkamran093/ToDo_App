let tasks = [];
const taskList = document.getElementById("tasks");
const title = document.getElementById("title");
const desc = document.getElementById("description");

renderTasks();

function addTask() {
  tasks.push([title.value, desc.value]);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  title.value = desc.value = "";
  renderTasks();
}
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  if (JSON.parse(localStorage.getItem("tasks")) === null) {
    return;
  }
  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    taskList.innerHTML += `
    <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3 text-left">
                <p>${tasks[i][0]}</p>
              </div>
              <div class="col-sm-7 text-left">
                <p>
                  ${tasks[i][1]}
                </p>
              </div>
              <div class="col-sm-2 text-right">
                <button type="button" class="btn btn-danger" aria-label="Close" onClick=deleteTask(${i})>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
    `;
  }
}
