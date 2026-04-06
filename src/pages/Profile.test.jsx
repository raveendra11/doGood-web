import { render, screen } from '@testing-library/react';
import Profile from './Profile';

const mockUseAuth = jest.fn();

jest.mock('../context/AuthContext', () => ({
  useAuth: () => mockUseAuth(),
}));

test('renders all user details except password on profile page', () => {
  mockUseAuth.mockReturnValue({
    currentUser: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      firstName: 'Jane',
      role: 'user',
      password: 'secret',
      passwordHash: 'abcdef',
    },
  });

  render(<Profile />);

  expect(screen.getByText('Name: Jane Doe')).toBeInTheDocument();
  expect(screen.getByText('Email: jane@example.com')).toBeInTheDocument();
  expect(screen.getByText('First Name: Jane')).toBeInTheDocument();
  expect(screen.getByText('Role: user')).toBeInTheDocument();
  expect(screen.queryByText(/Password:/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Password Hash:/i)).not.toBeInTheDocument();
});
