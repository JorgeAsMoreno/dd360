import { GameStatus } from "../../types/types";

export interface IBoard {
  wordChoosed: any;
  attempts: number;
  currentWord: string;
  completedWords: string[];
  gameStatus: GameStatus
  showModal: boolean
}
