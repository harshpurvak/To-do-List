function addTask() {
    let taskInput = document.getElementById("taskInput");
    let tasktext = taskInput.value.trim();
     
    console.log(tasktext); 

    if(tasktext === "") {
        alert("please enter a task");
        return;
    }
    
    let li = document.createElement("li");
    li.textContent = tasktext;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    let editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.onclick = function () {
    let newTask =prompt("Edit Task" ,li.firstChild.textContent);
        if(newTask !== null && newTask.trim() !== "") { 
            li.firstChild.textContent = newTask.trim();
        }   
    };

    li.appendChild(editBtn);

    let ul = document.getElementById("taskList");
    ul.appendChild(li);

    console.log(tasktext);
     
    taskInput.value = "";

}