import React, { useEffect, useReducer } from 'react'
import RowFinished from '../RowFinished/RowFinished'
import RowEmpty from '../RowEmpty/RowEmpty'
import RowCurrent from '../RowCurrent/RowCurrent'
import { IBoard } from './board.interface'
import { GameStatus } from '../../types/types'
import useWindow from '../../hooks/useWindow'
import { KEYS } from '../../constants/constants'
import { getWordEachFiveMinutes } from '../../utils/getWord'
import Keyboard from '../Keyboard/Keyboard'
import './board.scss'
import questionImage from '../../icons/question.svg'
import statsImage from '../../icons/stats.svg'

const Board = ({ setHasOnboarding }: any) => {
  const [event, updateEvent] = useReducer((prev: IBoard, next: Partial<IBoard>) => {
    return { ...prev, ...next }
  }, {
    wordChoosed: 'PLATA',
    attempts: 1,
    currentWord: '',
    completedWords: [],
    gameStatus: GameStatus.Playing,
    showModal: false,
  })

  const handleKeyDown = (ev: KeyboardEvent) => {
    const key = ev.key.toUpperCase();

    onKeyPressed(key);
  }
  
  const onKeyPressed = (key: string) => {
    if (event.gameStatus !== GameStatus.Playing) {
      return;
    }

    if (key === "BACKSPACE" && event.currentWord.length > 0) {
      updateEvent({ currentWord: event.currentWord.slice(0, -1) })
    }
    
    if (key === "ENTER" && event.currentWord.length === 5 && event.attempts <= 6) {
      handleEnter()
    }
    
    if (event.currentWord.length >= 5) return;

    if (KEYS.includes(key)) {
      updateEvent({ currentWord: event.currentWord + key })  
    }
  }

  const handleEnter = () => {
    if (event.currentWord === event.wordChoosed) {
      updateEvent({
        completedWords: [...event.completedWords, event.currentWord],
        gameStatus: GameStatus.Won
      })
      return
    }

    if (event.attempts === 5) {
      updateEvent({
        completedWords: [...event.completedWords, event.currentWord],
        gameStatus: GameStatus.Lost
      })
      return
    }

    updateEvent({
      completedWords: [...event.completedWords, event.currentWord],
      attempts: event.attempts + 1,
      currentWord: ''
    })
  }

  useWindow('keydown', handleKeyDown)
  
  useEffect(() => {
    setInterval(function(){
      updateEvent({ wordChoosed: getWordEachFiveMinutes() })
    }, 5 * 60 * 1000)
  }, [])

  return (
    <main className='board'>
      <div className='board_controls'>
        <div>
          <button className='control' onClick={() => setHasOnboarding(false)}>
            <img src={questionImage} alt='ayuda' />
          </button>
        </div>
        <div>
          <h1>WORDLE</h1>
        </div>
        <div>
          <button className='control'>
            <img src={statsImage} alt='Estadisticas' />
          </button>
        </div>
      </div>
      <div className='board_rows'>
        {event.completedWords.map((word, i) => (
          <RowFinished
            key={i}
            word={word}
            solution={event.wordChoosed}
            isExample={false}
          />
        ))}
        {event.gameStatus === GameStatus.Playing ? (
          <RowCurrent word={event.currentWord} />
        ) : null}

        {Array.from(Array(5 - event.attempts)).map((_, i) => (
          <RowEmpty key={i} />
        ))}
      </div>
      <Keyboard
        keys={KEYS}
        onKeyPressed={onKeyPressed}
      />
    </main>
  )
}

export default Board