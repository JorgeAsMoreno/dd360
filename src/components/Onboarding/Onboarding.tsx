import RowFinished from '../RowFinished/RowFinished'
import './onboarding.scss'

const Onboarding = ({ setHasOnboarding }: any) => {
  const handleStartGame = () => {
    localStorage.setItem('hasInteracted', 'true')
    setHasOnboarding(true)
  }
  return (
    <section className='onboarding'>
      <div className='onboarding_container'>
        <div>
          <h1>Cómo jugar</h1>
        </div>
        <div className='onboarding_container__rules'>
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe de ser una palabra valida de 5 letras.</p>
          <p>Despues de cada intento el color de las letras cambia para mostrar que tan cerca estas de acertar la palabra.</p>
        </div>
        <div className='onboarding_container__examples'>
          <p className='title'>Ejemplos:</p>
          <div className='words'>
            <RowFinished
              word='GATOS'
              solution='GXXXX'
              isExample={true}
            />
            <p className='info'>La letra <b>G</b> esta en la palabra y en la posicion correcta</p>
          </div>
          <div className='words'>
            <RowFinished
              word='VOCAL'
              solution='CXXXX'
              isExample={true}
            />
            <p className='info'>La letra <b>C</b> esta en la palabra pero en la posicion correcta</p>
          </div>
          <div className='words'>
            <RowFinished
              word='CANTO'
              solution='CPNAT'
              isExample={false}
            />
            <p className='info'>La letra <b>O</b> no esta en la palabra</p>
          </div>
        </div>
        <div>
          <p>Puede haber letras repetidas. Las pistas son independientes para cada letra. </p>
        </div>
        <div className='controls'>
          <p>¡Una palabra nueva cada 5 minutos!</p>
          <button onClick={handleStartGame}>
            !JUGAR¡
          </button>
        </div>
      </div>
    </section>
  )
}

export default Onboarding
