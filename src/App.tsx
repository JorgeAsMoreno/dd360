import React, { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import Onboarding from './components/Onboarding/Onboarding';

function App() {
  const [hasOnboarding, setHasOnboarding] = useState<boolean>(false)

  useEffect(() => {
    const hasInteracted = localStorage.getItem('hasInteracted')
    if (hasInteracted === 'true') {
      setHasOnboarding(true)
    }
  }, [])
  return (
    <React.Fragment>
      {
        hasOnboarding === false ?
        <Onboarding
          {...{setHasOnboarding}}
        /> :
        <Board />
      }
    </React.Fragment>
  );
}

export default App;
