import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search for a movie/i);
  expect(linkElement).toBeInTheDocument();
});
