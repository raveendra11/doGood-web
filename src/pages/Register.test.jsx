import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from './Register';
import { registerUser } from '../services/api';

const mockNavigate = jest.fn();

jest.mock('../services/api', () => ({
  registerUser: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  useNavigate: () => mockNavigate,
}), { virtual: true });

describe('Register page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  it('redirects to login after successful registration', async () => {
    registerUser.mockResolvedValue({});

    render(<Register />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() =>
      expect(registerUser).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        role: 'DONOR',
      })
    );
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
