import { BoxStatus } from "../types/types"

export const checkLetter = (letter: string, position: number, solution: string, isExample: boolean): BoxStatus => {
  if (solution.includes(letter)) {
    if (solution[position] === letter) {
      return 'correct'
    } else return 'present'
  }
  if (isExample === true) {
    return 'edit'
  } else return 'absent'
}
