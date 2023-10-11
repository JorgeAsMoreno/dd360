import { IKeyboard } from './keyboard.interface'
import './keyboard.scss'
import backSpace from '../../icons/backspace.svg'

const Keyboard = ({ keys, onKeyPressed }: IKeyboard) => {
  function handleInput(e: any) {
    onKeyPressed(e.target.textContent)
  }

  function handleEnter(e: any) {
    onKeyPressed("ENTER");
  }

  function handleDelete(e: any) {
    onKeyPressed("BACKSPACE");
  }

  return (
    <div className='keyboard'>
      {Array.from(Array(10)).map((_, i) => (
        <button key={i} className='keyboard_key' onClick={handleInput}>
          {keys[i]}
        </button>
      ))}
      <div className='keyboard_empty'></div>
      {Array.from(Array(9)).map((_, i) => (
        <button key={i + 10} className='keyboard_key' onClick={handleInput}>
          {keys[i + 10]}
        </button>
      ))}
      <button className='keyboard_enter' onClick={handleEnter}>
        ENTER
      </button>
      {Array.from(Array(7)).map((_, i) => (
        <button key={i + 19} className='keyboard_key' onClick={handleInput}>
          {keys[i + 19]}
        </button>
      ))}
      <button className='keyboard_delete' onClick={handleDelete}>
        <img src={backSpace} alt='Borrar' />
      </button>
    </div>
  )
}

export default Keyboard
