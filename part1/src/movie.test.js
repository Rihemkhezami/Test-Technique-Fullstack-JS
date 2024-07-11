import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './components/MovieCard';

const movie = {
  title: 'Inception',
  genre: 'Science Fiction',
  posterUrl: 'https://example.com/posters/inception.jpg',
  year: '2010',
  director: 'Christopher Nolan',
};

test('renders movie card with correct details', () => {
  const { getByText, getByAltText } = render(<MovieCard movie={movie} />);

  const titleElement = getByText(/Inception/i);
  expect(titleElement).toBeInTheDocument();

  const genreElement = getByText(/Science Fiction/i);
  expect(genreElement).toBeInTheDocument();

  const posterImage = getByAltText(/Inception Poster/i);
  expect(posterImage).toBeInTheDocument();

  const yearElement = getByText(/2010/i);
  expect(yearElement).toBeInTheDocument();

  const directorElement = getByText(/Christopher Nolan/i);
  expect(directorElement).toBeInTheDocument();
});
