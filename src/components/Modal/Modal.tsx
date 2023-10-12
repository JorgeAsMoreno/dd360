import { IModal } from './modal.interface'
import './modal.scss'
import { GameStatus } from '../../types/types'
import { getWordEachFiveMinutes } from '../../utils/getWord'
import { formatTime } from '../../utils/formatNextWordTime'

const Modal = ({ plays, victories, solution, gameStatus, updateEvent, nextWordTime }: IModal) => {
  const handleAcceptClick = () => {
    if (gameStatus === GameStatus.Won || gameStatus === GameStatus.Lost) {
      updateEvent({
        showStats: false,
        wordChoosed: getWordEachFiveMinutes(),
        attempts: 1,
        currentWord: '',
        completedWords: [],
        gameStatus: GameStatus.Playing
      });
    } else {
      updateEvent({ showStats: false });
    }
  }
  return (
    <div className='modal_overlay'>
      <div className='modal_container'>
        <h2>Estadísticas</h2>
        <div className='modal_stats'>
          <div>
            <b>{plays}</b>
            <p>Jugadas</p>
          </div>
          <div>
            <b>{victories}</b>
            <p>Victorias</p>
          </div>
        </div>
        <div className='mistery_word'>
          {gameStatus === GameStatus.Lost ? (
            <p>La palabra era: <b>{solution}</b></p>
          ) : null}
        </div>
        <div className='next_word'>
          <p>Siguiente palabra</p>
          <b>{formatTime(nextWordTime)}</b>
        </div>
        <div className='modal_button'>
          <button onClick={handleAcceptClick}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}
export default Modal