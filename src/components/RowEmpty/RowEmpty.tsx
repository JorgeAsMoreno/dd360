import React from 'react'
import Box from '../Box/Box'
import '../../styles/rows.scss'

const RowEmpty = () => {
  return (
    <div className='row'>
      {
        Array.from(Array(5)).map((_, index) => (
          <Box
            key={index}
            value={''}
            status={'empty'}  
          />
        ))
      }
    </div>
  )
}

export default RowEmpty
