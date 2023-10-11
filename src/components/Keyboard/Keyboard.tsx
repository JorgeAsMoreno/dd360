import React from 'react'
import { IKeyboard } from './keyboard.interface'
import styles from './keyboard.module.scss'

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
    <div className={styles.keyboardContainer}>
      {Array.from(Array(10)).map((_, i) => (
        <button key={i} className={styles.key} onClick={handleInput}>
          {keys[i]}
        </button>
      ))}
      <div className={styles.emptyKey}></div>
      {Array.from(Array(9)).map((_, i) => (
        <button key={i + 10} className={styles.key} onClick={handleInput}>
          {keys[i + 10]}
        </button>
      ))}
      <button className={styles.enterKey} onClick={handleEnter}>
        ENTER
      </button>
      {Array.from(Array(7)).map((_, i) => (
        <button key={i + 19} className={styles.key} onClick={handleInput}>
          {keys[i + 19]}
        </button>
      ))}
      <button className={styles.deleteKey} onClick={handleDelete}>
        DELETE
      </button>
    </div>
  )
}

export default Keyboard
