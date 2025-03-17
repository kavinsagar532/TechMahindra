const tasks = [
    { name: "Submit report", isCompleted: true, dueDate: "2025-02-20" },
    { name: "Design homepage", isCompleted: false, dueDate: "2025-02-28" },
    { name: "Fix login bug", isCompleted: false, dueDate: "2025-02-18" },
    { name: "Update database", isCompleted: true, dueDate: "2025-02-25" }
];

function getIncompleteTasks(taskList) {
    return taskList.filter(task => !task.isCompleted);
}

const formattedTasks = tasks.map(function(task) {
    const today = new Date().toISOString().split("T")[0]; 
    if (task.dueDate < today) {
        return `[Overdue] ${task.name}`;
    }
    return task.name;
});

const totalTasks = () => tasks.length;
const completedTasks = () => tasks.filter(task => task.isCompleted).length;

document.getElementById("incomplete-tasks").innerHTML = getIncompleteTasks(tasks)
    .map(task => `<li>${task.name}</li>`).join("");

document.getElementById("formatted-tasks").innerHTML = formattedTasks
    .map(task => `<li>${task}</li>`).join("");

document.getElementById("total-tasks").textContent = totalTasks();
document.getElementById("completed-tasks").textContent = completedTasks();
