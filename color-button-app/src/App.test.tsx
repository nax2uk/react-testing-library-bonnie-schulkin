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

    test('turns blue when clicked', () => {
      fireEvent.click(colorButton);
   
      expect(colorButton.textContent).toBe('Change to red');
      expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    });

    test('starts out as enabled', () => {
      expect(colorButton).toBeEnabled();
    });

    test('is disabled when checkbox is checked and enabled when checkbox is unchecked', () => {
      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      expect(colorButton).toBeDisabled();

      fireEvent.click(checkbox);
      expect(colorButton).toBeEnabled();
    });
  })

  describe('<input type="checkbox"/>', () => {
    test('starts of unchecked', () => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
  })
});
