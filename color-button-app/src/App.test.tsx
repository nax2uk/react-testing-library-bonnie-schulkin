import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  beforeEach(() => {
    render(<App />);
  })
  describe('<button/>', () => {
    let colorButton:HTMLElement;
    beforeEach(()=> {
      colorButton = screen.getByRole('button', { name: 'Change to blue' });
    })

    test('has correct initial color and text', () => {
      expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    });
  
    test('starts out as enablesd', () => {
      expect(colorButton).toBeEnabled();
    });

    test('turns blue when clicked', () => {
      fireEvent.click(colorButton);
   
      waitFor(()=> {
        expect(colorButton.textContent).toBe('Change to red');
        expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
      })
    });
  })

  describe('<input type="checkbox"/>', () => {
    test('starts of unchecked', () => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    })
  })
});
