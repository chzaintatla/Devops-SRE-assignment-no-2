import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the SPARKO premium real estate homepage content', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /find your place\. build your future\./i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/discover exceptional properties/i)).toBeInTheDocument();
  expect(screen.getByText(/featured properties/i)).toBeInTheDocument();
  expect(screen.getByText(/premium real estate in lahore/i)).toBeInTheDocument();
});
