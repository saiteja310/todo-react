import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title Header of table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});