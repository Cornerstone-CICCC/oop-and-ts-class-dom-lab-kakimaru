import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.updateTodos = this.updateTodos.bind(this)
    this.greeting = this.greeting.bind(this)
    this.props.todoContext.subscribe(this.updateTodos)
    this.props.todoContext.subscribe(this.greeting)
    this.todoListElement = null
  }

  greeting(todos) {
    console.log('todos', todos)
  }

  updateTodos(todos) {
    this.state.todos = todos;
    // console.log(todos)
    
    this.todoListElement.innerHTML = ''

    // const todoItems = this.state.todos.map(todo => {
    //   return `<li>${todo.task}</li>`
    // }).join('')
    this.state.todos.forEach(todo=> {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })
      this.todoListElement.appendChild(todoItem.render())
    })
  }

  // updateList() {
  //   this.mount(this.container)
  // }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    todoListElement.innerHTML = `
      <ul></ul>
    `

    this.todoListElement = todoListElement.querySelector('ul')
    
    return todoListElement;
  }

  // mount(container) {
  //   container.innerHTML = ''
  //   const listElement = this.render()
  //   container.appendChild(listElement)
  // }
}