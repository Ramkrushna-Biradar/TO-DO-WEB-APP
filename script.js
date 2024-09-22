document.getElementById('addTask').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');

    const taskText = taskInput.value.trim();
    const taskTime = taskDate.value;

    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText} ${taskTime ? ` (Due: ${new Date(taskTime).toLocaleString()})` : ''}</span>
        <button class="complete">✔</button>
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
    taskDate.value = '';

    // Mark as complete
    listItem.querySelector('.complete').addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Edit task
    listItem.querySelector('.edit').addEventListener('click', function() {
        const taskText = listItem.querySelector('span').innerText.split(' (Due:')[0];
        taskInput.value = taskText;
        taskDate.value = taskTime || '';
        taskList.removeChild(listItem);
    });

    // Delete task
    listItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
}
