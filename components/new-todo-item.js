import Router from "../services/router.js";

class NewTodoItem extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.getElementById("todo-new-item-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.setupEventListeners();
  }

  setupEventListeners() {
    const form = this.root.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const title = formData.get("title");
      const isChecked = formData.get("checked") === "on";
      if (title.length === 0) return;
      else this.store.todoList.push({ title, isChecked });
      form.reset();
      Router.go("/todo-list");
    });
  }
}

customElements.define("todo-new-item", NewTodoItem);

export { NewTodoItem };
