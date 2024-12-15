export default class App {
  constructor(store) {
    this.store = store;
  }
  initialize() {
    console.log("App initialized");
    // this.setupEventListeners();
  }

  setupEventListeners() {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const todoInput = document.getElementById("todo-item-input");
      const todoCheckbox = document.getElementById("todo-item-checkbox");
      this.store.addTodo({
        title: todoInput.value,
        isChecked: todoCheckbox.value,
      });
    });

    this.renderTodoList();
  }
}
