


//  todo ==> {id,title,completed}

//model
class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId
        this.title = title
        this.completed = false
    }
}
Todo.nextId = 0;

// service
class TodosService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign(todo, { title: newTitle }) : todo)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo)
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    completeAll() {
        let isAllCompleted = this.todos.every(todo => todo.completed)
        this.todos = this.todos.map(todo => Object.assign(todo, { completed: !isAllCompleted }))
    }
    view(filter) {
        switch (filter) {
            case 'ALL': {
                this.todos.forEach(todo => console.log(todo))
            }
        }
    }
}


let todosService=new TodosService();