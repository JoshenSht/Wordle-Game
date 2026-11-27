
export const WORDS = [
  "paper", "clone", "mouse", "dream", "flame",
  "grape", "house", "might", "music", "green",
  "broom", "smile", "table", "water", "light",
  "might", "blond", "crain", "scout", "world",
  "heart", "tiger", "green", "brave", "peace",
  "river", "teach", "happy", "night", "leave"
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
