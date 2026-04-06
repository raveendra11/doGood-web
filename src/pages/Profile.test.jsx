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
      role: 'user',
      password: 'secret',
    },
  });

  render(<Profile />);

  expect(screen.getByText('Name: Jane Doe')).toBeInTheDocument();
  expect(screen.getByText('Email: jane@example.com')).toBeInTheDocument();
  expect(screen.getByText('Role: user')).toBeInTheDocument();
  expect(screen.queryByText(/Password:/i)).not.toBeInTheDocument();
});
