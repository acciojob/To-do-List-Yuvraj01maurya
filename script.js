//your code here
// Selecting necessary elements
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to add todo item to the list
function addTodo() {
  const todoText = newTodoInput.value.trim(); // Remove leading/trailing whitespace
  
  // Check if the input is not empty
  if (todoText !== '') {
    const listItem = document.createElement('li'); // Create a new list item
    listItem.textContent = todoText; // Set its text content
    todoList.appendChild(listItem); // Add it to the todo list
    
    newTodoInput.value = ''; // Clear the input field after adding the todo
  }
}

// Event listener for button click to add todo
addTodoBtn.addEventListener('click', addTodo);

// Event listener for pressing Enter key in the input field
newTodoInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

