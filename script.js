// Function to create a new todo item
function createTodoItem(task) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('change', updateTodoCount); // Add event listener for marking as done

  const label = document.createElement('label');
  label.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', deleteTodoItem); // Add event listener for deleting

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Function to add a new todo item
function addTodoItem(event) {
  event.preventDefault();
  const todoInput = document.getElementById('name-input-1');
  const todoList = document.getElementById('to-do-name-list');
  const task = todoInput.value.trim();

  if (task === '') {
    alert('Please enter a task');
    return;
  }

  const listItem = createTodoItem(task);
  todoList.appendChild(listItem);
  todoInput.value = '';

  updateTodoCount();
}

// Function to delete a todo item
function deleteTodoItem(event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    const todoList = listItem.parentElement;
    todoList.removeChild(listItem);
    updateTodoCount();
  }
}

// Function to update the todo count
function updateTodoCount() {
  const todoList = document.getElementById('to-do-name-list');
  const todoCount = document.getElementById('to-do-count');
  const itemsLeft = todoList.querySelectorAll('li:not(.done)').length;

  todoCount.textContent = `Tasks left: ${itemsLeft}`;

  const todoCountElement = document.getElementById('to-do-count');
  todoCountElement.style.color = 'white';
  todoCountElement.style.backgroundColor = '#7993ea';
  todoCountElement.style.borderRadius = '8px';
  todoCountElement.style.textAlign = 'center';
}

// Function to mark a todo item as done
function markAsDone(event) {
  if (event.target.classList.contains('checkbox')) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('done');
  }
}

// Event listeners
document.getElementById('to-do-form').addEventListener('submit', addTodoItem);
document.getElementById('to-do-name-list').addEventListener('click', deleteTodoItem);
document.getElementById('to-do-name-list').addEventListener('change', markAsDone);