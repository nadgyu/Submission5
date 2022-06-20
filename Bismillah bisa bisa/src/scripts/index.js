import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector(".hero"),
  drawer: document.querySelector("#menu"),
  content: document.querySelector("#sidebar"),
});
window.addEventListener("hashchange", () => {
  app.renderPage();
});
