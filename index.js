import Router from "./services/router.js";
import proxiedStore from "./services/store.js";
import { TodoItems } from "./components/todo-items.js";
import { NewTodoItem } from "./components/new-todo-item.js";
/* Avoid using this instead use dependency injection 
window.app = {};
app.store = proxiedStore;
*/

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready");
  Router.init();
});
