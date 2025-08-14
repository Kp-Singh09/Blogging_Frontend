import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Dashboard page renders correctly at the root path', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Add a specific check to confirm Dashboard component is rendered.  This will depend on the implementation of the Dashboard component.  Here's an example assuming it has a specific heading:
  expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument();
});

