import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [buttonColour, setButtonColour] = useState('red');
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
      style={{ backgroundColor: buttonColour }}
      onClick={() => setButtonColour(newButtonColour)}
      >
        Change to {newButtonColour}
      </button>
      <input type='checkbox' />
    </div>
  );
};

export default App;
