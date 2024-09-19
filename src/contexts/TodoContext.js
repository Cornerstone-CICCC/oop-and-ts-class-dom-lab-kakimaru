export class TodoContext {
  static id = 1
  
  constructor() {
    this.todos = []
    this.listeners = []
  }

  addTodo(task) {
    const newTodo = {
      id: TodoContext.id++,
      task,
      completed: false,
    }
    this.todos.push(newTodo)
    this.notifyListeners()
    // this.listeners[1]('Hello')
  }

  getTodos() {
    return this.todos
  }

  updateTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo) 
    this.notifyListeners()
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.notifyListeners()
  }


  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.todos))
  }
}