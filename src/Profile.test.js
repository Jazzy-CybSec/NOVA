import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  test('renders profile form', () => {
    render(<Profile />);
    expect(screen.getByRole('heading', { name: /Your Profile/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Height:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save Profile/i })).toBeInTheDocument();
  });

  test('updates first name input correctly', () => {
    render(<Profile />);
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  test('updates last name input correctly', () => {
    render(<Profile />);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
  });

  test('updates gender select correctly', () => {
    render(<Profile />);
    const genderSelect = screen.getByLabelText(/Gender:/i);
    fireEvent.change(genderSelect, { target: { value: 'f' } });
    expect(genderSelect.value).toBe('f');
  });

  test('updates height input correctly', () => {
    render(<Profile />);
    const heightInput = screen.getByLabelText(/Height:/i);
    fireEvent.change(heightInput, { target: { value: '170' } });
    expect(heightInput.value).toBe('170');
  });

  test('updates weight input correctly', () => {
    render(<Profile />);
    const weightInput = screen.getByLabelText(/Weight:/i);
    fireEvent.change(weightInput, { target: { value: '70' } });
    expect(weightInput.value).toBe('70');
  });

  test('updates height unit select correctly', () => {
    render(<Profile />);
    const heightUnitSelect = screen.getByRole('combobox', {  name: /height unit/i});
    fireEvent.change(heightUnitSelect, { target: { value: 'ft/inches' } });
    expect(heightUnitSelect.value).toBe('ft/inches');
  });

  test('updates weight unit select correctly', () => {
    render(<Profile />);
    const weightUnitSelect = screen.getByRole('combobox', {  name: /weight unit/i});
    fireEvent.change(weightUnitSelect, { target: { value: 'pounds' } });
    expect(weightUnitSelect.value).toBe('pounds');
  });

  test('saves profile data to local storage on form submission', () => {
    render(<Profile />);
    fireEvent.submit(screen.getByRole('form'));
    expect(localStorage.getItem('profileData')).toBeDefined();
  });

  test('shows alert on form submission', () => {
    render(<Profile />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    fireEvent.submit(screen.getByRole('form'));
    expect(alertMock).toHaveBeenCalledWith('Profile data saved!');
    alertMock.mockRestore();
  });
});
