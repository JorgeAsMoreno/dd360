import { WORDS } from "../constants/constants";

export const getWord = () => {
  return WORDS
}

export const getWordEachFiveMinutes = () => {
  const words = getWord()
  const randomWordIndex = Math.floor(Math.random() * words.length)
  return words[randomWordIndex].toUpperCase()
}
