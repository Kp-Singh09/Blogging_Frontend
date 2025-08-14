import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Signup page renders correctly at /signup route', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // You'll likely want to add assertions here based on what the Signup page renders.
  // For example, if the Signup page has an h1 with the text "Signup", you'd do:
  const signupHeading = screen.getByRole('heading', { name: /Signup/i });
  expect(signupHeading).toBeInTheDocument();
});

