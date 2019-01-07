"use strict"
console.log("-index.js-");

//---------------------------------
// DOM API
//---------------------------------

let alertBox = document.querySelector('.alert')
let greetBtn = document.querySelector('.btn-primary')
let showBtn = document.querySelector('.btn-success')
let hideBtn = document.querySelector('.btn-danger')

greetBtn.addEventListener('click', e => {
    alertBox.innerHTML = "good evening"
})
showBtn.addEventListener('click', e => {
    alertBox.style.display = 'block'
})
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
})



//---------------------------------
// XHR/Fetch API ==> to make async http-request to server-programs
//---------------------------------

let todosBtn = document.getElementById('todos-btn');
let todoListEle = document.getElementById('todo-list');
todosBtn.addEventListener('click', e => {
    //
    let apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    let promise = fetch(apiUrl); // Non-blocking-IO
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let liTemplate = `
                <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                    ${todo.id} - ${todo.title} - ${todo.completed}
                </li>
            `
                arr.push(liTemplate);
            })
            todoListEle.innerHTML = arr.join(" ");
        })

})



//---------------------------------
// Timer API
//---------------------------------

let timeEle = document.getElementById('time');

setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString()
}, 1000);