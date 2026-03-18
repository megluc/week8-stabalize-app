
const quotes = [
  "Keep it simple.",
  "Stay curious.",
  "Never give up.",
  "Dream big.",
  "Be kind.",
  "Take risks.",
  "Think different.",
  "Keep learning."
];

export function fetchQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return Promise.resolve(quotes[index]);
}
