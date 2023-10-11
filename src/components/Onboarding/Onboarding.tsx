import RowFinished from '../RowFinished/RowFinished'

const Onboarding = ({ setHasOnboarding }: any) => {
  const handleStartGame = () => {
    localStorage.setItem('hasInteracted', 'true')
    setHasOnboarding(true)
  }
  return (
    <section>
      <div>
        <h1>Como jugar</h1>
      </div>
      <div>
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p>Cada intento debe de ser una palabra valida de 5 letras.</p>
        <p>Despues de cada intento el color de las letras cambia para mostrar que tan cerca estas de acertar la palabra.</p>
      </div>
      <div>
        <b>Ejemplos:</b>
        <div>
          <RowFinished
            word='GATOS'
            solution='GXXXX'
            isExample={true}
          />
          <p>La letra <b>G</b> esta en la palabra y en la posicion correcta</p>
        </div>
        <div>
          <RowFinished
            word='VOCAL'
            solution='CXXXX'
            isExample={true}
          />
          <p>La letra <b>C</b> esta en la palabra pero en la posicion correcta</p>
        </div>
        <div>
          <RowFinished
            word='CANTO'
            solution='CPNAT'
            isExample={false}
          />
          <p>La letra <b>O</b> no esta en la palabra</p>
        </div>
      </div>
      <div>
        <p>Puede haber letras repetidas. Las pistas son independientes para cada letra. </p>
      </div>
      <div>
        <p>Una palabra nueva cada 5 minutos!</p>
        <button onClick={handleStartGame}>
          Jugar!
        </button>
      </div>
    </section>
  )
}

export default Onboarding
