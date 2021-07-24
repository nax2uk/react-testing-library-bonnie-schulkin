import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  let checkbox: HTMLElement;
  beforeEach(() => {
    render(<App />);
    checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  });

  describe('<input type="checkbox"/>', () => {
    test('starts of unchecked', () => {
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('<button/>', () => {
    let colorButton: HTMLElement;
    beforeEach(() => {
      colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    });

    test('starts of with red background', () => {
      expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    });

    test('turns blue when clicked', () => {
      fireEvent.click(colorButton);

      expect(colorButton.textContent).toBe('Change to Medium Violet Red');
      expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    });

    test('starts out as enabled', () => {
      expect(colorButton).toBeEnabled();
    });

    test('is disabled when checkbox is checked and enabled when checkbox is unchecked', () => {
      fireEvent.click(checkbox);
      expect(colorButton).toBeDisabled();

      fireEvent.click(checkbox);
      expect(colorButton).toBeEnabled();
    });

    test('has grey background when checkbox is checked and reverts to red background when checkbox is unchecked', () => {
      fireEvent.click(checkbox);
      expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkbox);
      expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    });

    test('has grey background when checkbox is checked and reverts to blue background when checkbox is unchecked', () => {
      fireEvent.click(colorButton);
      fireEvent.click(checkbox);
      expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkbox);
      expect(colorButton).toBeEnabled();
      expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    });
  });
});
