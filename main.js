// Coordinates the app
import { setQuote } from "./state.js";
import { render } from "./render.js";
import { fetchQuote } from "./api.js";

const btn = document.querySelector("#new-quote-btn");

// Initial render
render();

// Button click to get a new quote
btn.addEventListener("click", () => {
  fetchQuote().then(quote => {
    setQuote(quote);
    render();
  });
});
