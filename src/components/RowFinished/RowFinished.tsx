import { IRowFinished } from './rowfinished.interface'
import Box from '../Box/Box'
import '../../styles/rows.scss'
import { checkLetter } from '../../utils/checkLetter'

const RowFinished = ({ word, solution, isExample }: IRowFinished) => {

  return (
    <div className='row'>
      {
        Array.from(Array(5)).map((_, index) => (
          <Box
            key={index}
            value={word[index]}
            status={checkLetter(word[index], index, solution, isExample)}  
          />
        ))
      }
    </div>
  )
}

export default RowFinished
