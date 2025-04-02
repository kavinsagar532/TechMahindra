document.getElementById("addTaskBtn").addEventListener("click", addTask);

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    
    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ name: taskName, isCompleted: false });
    taskInput.value = "";
    updateTaskList();
}

function toggleTask(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.isCompleted ? "completed" : "";
        li.innerHTML = `${task.name} <button class="task-btn" onclick="toggleTask(${index})">✔</button>`;
        taskList.appendChild(li);
    });

    document.getElementById("taskCount").innerText = 
        `Total Tasks: ${tasks.length} | Incomplete Tasks: ${tasks.filter(t => !t.isCompleted).length}`;
}
