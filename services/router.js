import { NewTodoItem } from "../components/new-todo-item.js";
import { TodoItems } from "../components/todo-items.js";
import proxiedStore from "./store.js";

const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/todo-list":
        pageElement = document.createElement("todo-items");
        pageElement.store = proxiedStore; // Assign store
        break;
      default:
        pageElement = document.createElement("todo-new-item");
        pageElement.store = proxiedStore; // Assign store
        break;
    }
    if (pageElement) {
      // document.querySelector("main").children[0].remove();
      const cache = document.querySelector("main");
      console.log({ pageElement, cache });
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    } else {
      // 404
      document.querySelector("main").innerHTML = "Oups, 404!";
    }
  },
};

export default Router;
