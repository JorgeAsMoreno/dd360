import { GameStatus } from "../../types/types"

export interface IModal {
  victories: number,
  plays: number
  solution?: string
  gameStatus: GameStatus,
  updateEvent: any
}

