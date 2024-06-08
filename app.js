// let tasks = [];

// function renderTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.classList.add('task-item');
//         if (task.completed) {
//             li.classList.add('completed');
//         }
//         li.classList.add(`${task.priority}-priority`);
//         li.innerHTML = `
//             <span>${task.name}</span>
//             <span class="status">${task.completed ? 'Completed' : 'Pending'}</span>
//             <div>
//                 <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Done'}</button>
//                 <button onclick="editTask(${index})">Edit</button>
//                 <button onclick="deleteTask(${index})">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskName = taskInput.value.trim();
//     const prioritySelect = document.getElementById('prioritySelect');
//     const priority = prioritySelect.value;
//     if (taskName !== '') {
//         tasks.push({ name: taskName, priority: priority, completed: false });
//         renderTasks();
//         taskInput.value = '';
//     }
// }

// function editTask(index) {
//     const newTaskName = prompt('Enter new task name:');
//     if (newTaskName !== null) {
//         tasks[index].name = newTaskName.trim();
//         renderTasks();
//     }
// }

// function deleteTask(index) {
//     tasks.splice(index, 1);
//     renderTasks();
// }

// function toggleTask(index) {
//     tasks[index].completed = !tasks[index].completed;
//     renderTasks();
// }

// // Initial rendering
// renderTasks();


let tasks = [];

// Load tasks from local storage if available
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        if (task.completed) {
            li.classList.add('completed');
        }
        li.classList.add(`${task.priority}-priority`);
        li.innerHTML = `
            <span>${task.name}</span>
            <span class="status">${task.completed ? 'Completed' : 'Pending'}</span>
            <div>
                <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Done'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.value;
    if (taskName !== '') {
        tasks.push({ name: taskName, priority: priority, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
}

function editTask(index) {
    const newTaskName = prompt('Enter new task name:');
    if (newTaskName !== null) {
        tasks[index].name = newTaskName.trim();
        saveTasks();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Initial rendering
renderTasks();
