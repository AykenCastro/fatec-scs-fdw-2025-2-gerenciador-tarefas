// URL da API. Se rodar localmente sem docker, é localhost:3000.
// Se rodar com docker-compose e acessar do browser, também é localhost:3000 (exposto).
const API_URL = 'http://localhost:3000/tasks';

async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
            <div>
                <button class="btn-done" onclick="toggleTask(${task.id}, ${!task.completed})">✓</button>
                <button class="btn-del" onclick="deleteTask(${task.id})">X</button>
            </div>
        `;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    if (!input.value) return;
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input.value })
    });
    input.value = '';
    loadTasks();
}

async function toggleTask(id, status) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: status })
    });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

loadTasks();