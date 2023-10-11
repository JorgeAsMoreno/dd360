import React, { useReducer } from 'react'
import RowFinished from '../RowFinished/RowFinished'
import RowEmpty from '../RowEmpty/RowEmpty'
import RowCurrent from '../RowCurrent/RowCurrent'
import { IBoard } from './board.interface'
import { GameStatus } from '../../types/types'

const Board = () => {
  const [event, updateEvent] = useReducer((prev: IBoard, next: Partial<IBoard>) => {
    return { ...prev, ...next }
  }, {
    wordChoosed: '',
    turn: 1,
    attendees: 0,
    currentWord: '',
    completedWords: [],
    gameStatus: GameStatus.Playing
  })

  return (
    <main>
      <h1>Board</h1>
      <RowFinished
        word='sabeo'
        solution='sabio'
      />
      <RowCurrent
        word='sabi'
      />
      <RowEmpty />
      <RowEmpty />
    </main>
  )
}

export default Board