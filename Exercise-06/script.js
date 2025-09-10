const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const addTodo = document.getElementById('add-todo')

let todos = JSON.parse(localStorage.getItem('todos')) || []

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = () => {
    todoList.innerHTML = ''
    if(todos.lenght === 0){
        todoList.innerHTML = "<p class='empty'>No tasks yet...</p>"
        return;
    }
    todos.forEach((todo, index)=> {
        let li = document.createElement('li')
        li.innerHTML=`<span>${todo}</span>
          <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>`
        todoList.appendChild(li)
    })
}

addTodo.addEventListener('click', ()=>{
    const newTodo = todoInput.value.trim()
    if(newTodo === '') 
        return alert('please enter a task');
    todos.push(newTodo)
    saveTodos()
    renderTodos()
    todoInput.value = ''
})

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos()
    renderTodos()
}

renderTodos()