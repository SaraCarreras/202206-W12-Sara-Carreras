import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the html elements', () => {
  render(<App />);
  const linkElement = screen.getByText(/Una frase que dice alguien/i);
  expect(linkElement).toBeInTheDocument();
});
