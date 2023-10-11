import React from 'react'
import { IRowFinished } from './rowfinished.interface'
import Box from '../Box/Box'
import { BoxStatus } from '../../types/types'
import '../../styles/rows.scss'

const RowFinished = ({ word, solution }: IRowFinished) => {

  const checkLetter = (letter: string, position: number): BoxStatus => {
    if (solution.includes(letter)) {
      if (solution[position] === letter) {
        return 'correct'
      } else return 'present'
    } else return 'absent'
  }

  return (
    <div className='row'>
      {
        Array.from(Array(5)).map((_, index) => (
          <Box
            key={index}
            value={word[index]}
            status={checkLetter(word[index], index)}  
          />
        ))
      }
    </div>
  )
}

export default RowFinished
