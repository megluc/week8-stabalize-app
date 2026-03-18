import { getQuote } from "./state.js";

// Updates the DOM
const quoteEl = document.querySelector("#quote");

export function render() {
  quoteEl.textContent = getQuote();
}
