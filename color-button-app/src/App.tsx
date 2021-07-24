import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [buttonColour, setButtonColour] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColour }}
        onClick={() => setButtonColour(newButtonColour)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColour}
      </button>
      <input
        type='checkbox'
        id='checkbox-enable-button'
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
    </div>
  );
};

export default App;
