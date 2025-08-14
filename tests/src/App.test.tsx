/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


test('Dashboard page renders at the root path', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const dashboardElement = screen.getByRole('document', { name: /Dashboard/i });
  expect(dashboardElement).toBeInTheDocument();
});

