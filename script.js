// global variables

const inputElement = document.getElementById("task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// eventlistener to listen for button click and addTask
// Function to check if the "enter button is pressed and do the same task as if it's clicked"
addTaskButton.addEventListener("click", addTask);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask()
    }
})
// Executing the function when Add Task button is pressed, and checking if the task field is empty or not
function addTask() {
    
const task = inputElement.value;

if (task == "") {
    alert("Please enter a task")
    return;
}

inputElement.value = "";
 
const listItem = document.createElement("li");
  listItem.className = "task-list-item";

  const textElement = document.createElement("p");
  textElement.textContent = task;

// Creates task and executes function to signal that the checkbox is clicked.
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "task-checkbox";
checkbox.addEventListener("change", function () {
    textElement.classList.toggle("checkbox-toggle")
} );

  listItem.appendChild(checkbox)
  listItem.appendChild(textElement);
  taskList.appendChild(listItem);

// Adding a delete button and executing function to remove task when button is pressed
const deleteButton = document.createElement("button")
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function () {
    listItem.remove()
})

deleteButton.className = "delete-button";
listItem.appendChild(deleteButton);

}
