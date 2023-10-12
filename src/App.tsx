import React, { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import Onboarding from './components/Onboarding/Onboarding';

function App() {
  const [hasOnboarding, setHasOnboarding] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    const hasInteracted = localStorage.getItem('hasInteracted')
    if (hasInteracted === 'true') {
      setHasOnboarding(true)
    }
  }, [])

  return (
    <div data-theme={theme}>
      {
        hasOnboarding === false ?
        <Onboarding
          {...{setHasOnboarding}}
        /> :
        <Board
          {...{setHasOnboarding, theme, setTheme}}
        />
      }
    </div>
  );
}

export default App;
