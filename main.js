// Находим элементы на странице
const form = document.querySelector(".todo_form");
const taskInput = document.querySelector(".todo-input");
const taskLists = document.querySelector("#task_list");
const deleteButton = document.querySelector(".todo_button_delete");

// Добавление задачи
form.addEventListener("submit", addTask);

// Удаление задачи
taskLists.addEventListener("click", deleteTask);

// Отмечаем задачу завершенной
taskLists.addEventListener("click", doneTask);

// Функции
function addTask(event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода
  const taskText = taskInput.value;
  // Формируем разметку для новой задачи
  const taskHTML = ` <div class="todo_task">
                                <label class="todo_label">
                                <input type="checkbox" data-action="done">
                                    ${taskText}
                                </label>
                                <button class="todo_button_delete" data-action="delete">x</button>
                        </div>`;

  // Добавить задачу на страницу
  taskLists.insertAdjacentHTML("beforeend", taskHTML);

  // Очищаем поле ввода и возвращаем на него фокус
  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(event) {
  // Проверяем что клик был по кнопке "удалить задачу"
  // if (deleteButton.classList.contains('todo_button_delete')){
  if (event.target.dataset.action === "delete") {
    // console.log('DELETE');
    const parentNode = event.target.closest(".todo_task");

    parentNode.remove();
  }
}

function doneTask(event) {
  // Проверяем что клик был по кнопке "задача выполнена"
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest(".todo_task");
    parentNode.classList.toggle("todo_task_complete");
  }
}

const form_2 = document.querySelector(".todo_form_2");
const taskInput_2 = document.querySelector(".todo-input_2");
const taskLists_2 = document.querySelector("#task_list_2");
const deleteButton_2 = document.querySelector(".todo_button_delete_2");

//  Добавление задачи
form_2.addEventListener("submit", addTask_2);

function addTask_2(event) {
  // Отменяем отправку формы
  event.preventDefault();

  // Достаем текст задачи из поля ввода
  const taskText = taskInput_2.value;
  // Формируем разметку для новой задачи
  const taskHTML = ` <div class="todo_task_2">
                                <label class="todo_label_2">
                                <input type="checkbox" data-action="done">
                                    ${taskText}
                                </label>
                                <button class="todo_button_delete_2" data-action="delete">x</button>
                        </div>`;

  // Добавить задачу на страницу
  taskLists_2.insertAdjacentHTML("beforeend", taskHTML);

  // Очищаем поле ввода и возвращаем на него фокус
  taskInput_2.value = "";
  taskInput_2.focus();
}

// Удаление задачи
taskLists_2.addEventListener("click", deleteTask_2);

function deleteTask_2(event) {
  // Проверяем что клик был по кнопке "удалить задачу"
  // if (deleteButton.classList.contains('todo_button_delete')){
  if (event.target.dataset.action === "delete") {
    // console.log('DELETE');
    const parentNode = event.target.closest(".todo_task_2");

    parentNode.remove();
  }
}

// Отмечаем задачу завершенной
taskLists_2.addEventListener("click", doneTask_2);

function doneTask_2(event) {
  // Проверяем что клик был по кнопке "задача выполнена"
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest(".todo_task_2");
    parentNode.classList.toggle("todo_task_2_complete");
  }
}
