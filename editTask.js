function editTask(button){

let newTask = prompt("Edit Task");

if(newTask !== null){
button.parentElement.firstChild.textContent = newTask;
}

saveTasks();
}