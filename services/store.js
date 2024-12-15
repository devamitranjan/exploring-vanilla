class Store {
  constructor() {
    this.todoList = [{ title: "Buy milk", isChecked: false }];
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo);
  }
}

const proxiedStore = new Proxy(new Store(), {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    console.log({ target, key });
    target[key] = value;

    return true;
  },
});

export default proxiedStore;
