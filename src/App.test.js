import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/rating/i);
  expect(linkElement).toBeInTheDocument();
});
