import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {

  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  it('button has correct initial color and text', () => {
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  });

  it('button turns blue when clicked', () => {
    fireEvent.click(colorButton);
 
    waitFor(()=> {
      expect(colorButton.textContent).toBe('Change to red');
      expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    })
  });

});
