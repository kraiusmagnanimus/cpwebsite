import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders root app', () => {
  render(<App />);
  expect(document.querySelector('div')).toBeInTheDocument();
});