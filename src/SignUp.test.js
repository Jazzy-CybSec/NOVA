import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('renders SignUp component', () => {
  render(<SignUp />);
  const signUpElement = screen.getByRole('heading', { name: /Sign Up/i });
  expect(signUpElement).toBeInTheDocument();
});
