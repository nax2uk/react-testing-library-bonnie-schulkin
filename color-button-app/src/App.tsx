import React, { useState } from 'react';
import { replaceCamelWithSpaces } from './utils/replaceCamelWithSpaces';
import './App.css';

const App: React.FC = () => {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='checkbox-disable-button'
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
      <label htmlFor="checkbox-disable-button">Disable button</label>
    </div>
  );
};

export default App;
