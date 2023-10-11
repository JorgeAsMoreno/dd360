import React from 'react'
import { IRowCurrent } from './rowcurrent.interface'
import Box from '../Box/Box'
import '../../styles/rows.scss'

const RowCurrent = ({ word }: IRowCurrent) => {
  return (
    <div className='row'>
      {
        word.split('').map((letter, index) => (
          <Box
            key={index}
            value={letter}
            status={'edit'}
          />
        ))
      }
      {
        Array.from(Array(5 - word.length)).map((letter, index) => (
          <Box
            key={index}
            value={letter}
            status={'edit'}
          />
        ))
      }
    </div>
  )
}

export default RowCurrent
