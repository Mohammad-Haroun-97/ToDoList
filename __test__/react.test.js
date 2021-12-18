import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
 
import Login from '../src/components/todo/Login';

 
describe("Login ", () => {
 
  test('render email input', () => {
    render(<Login />);
 
    const inputEl = screen.getByTestId("username-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
 
  test('email validation', () => {
    render(<Login />);
 
    const inputEl = screen.getByTestId("username-input");
    userEvent.type(inputEl, "Haroun");
 
    expect(screen.getByTestId("username-input")).toHaveValue("Haroun");
    
  });

 


});