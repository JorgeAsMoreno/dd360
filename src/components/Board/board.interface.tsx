import { GameStatus } from "../../types/types";

export interface IBoard {
  wordChoosed: any;
  attempts: number;
  currentWord: string;
  completedWords: string[];
  gameStatus: GameStatus
  plays: number,
  victories: number
  showStats: boolean
  nextWord: number
}
