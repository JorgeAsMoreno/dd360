import { GameStatus } from "../../types/types";

export interface IBoard {
  wordChoosed: string;
  turn: number;
  attendees: number;
  currentWord: string;
  completedWords: string[];
  gameStatus: GameStatus
}
