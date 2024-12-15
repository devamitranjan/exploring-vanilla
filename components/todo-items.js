export class TodoItems extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.getElementById("todo-items-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.renderTodoList();
  }

  renderTodoList() {
    const todoListElement = this.root.querySelector("ul");
    todoListElement.innerHTML = "";
    this.store.todoList.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      todoListElement.appendChild(li);
    });
  }
}

customElements.define("todo-items", TodoItems);
