// Import des modules nécessaires
import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './components/MovieCard';
// Exemple de données de film pour le test
const movie = {
  title: 'Inception',
  genre: 'Science Fiction',
  posterUrl: 'https://example.com/posters/inception.jpg',
  year: '2010',
  director: 'Christopher Nolan',
};

// Test unitaire pour le composant MovieCard
test('renders movie card with correct details', () => {
  // Rend le composant MovieCard avec les données de film simulées
  const { getByText, getByAltText } = render(<MovieCard movie={movie} />);

  // Vérifie que le titre du film est rendu correctement
  const titleElement = getByText(/Inception/i);
  expect(titleElement).toBeInTheDocument();

  // Vérifie que le genre du film est rendu correctement
  const genreElement = getByText(/Science Fiction/i);
  expect(genreElement).toBeInTheDocument();

  // Vérifie que l'image du poster du film est rendue correctement
  const posterImage = getByAltText(/Inception Poster/i);
  expect(posterImage).toBeInTheDocument();

  // Vérifie que l'année du film est rendue correctement
  const yearElement = getByText(/2010/i);
  expect(yearElement).toBeInTheDocument();

  // Vérifie que le réalisateur du film est rendu correctement
  const directorElement = getByText(/Christopher Nolan/i);
  expect(directorElement).toBeInTheDocument();
});
