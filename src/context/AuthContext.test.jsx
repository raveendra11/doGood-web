import { act, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const mockNavigate = jest.fn();

jest.mock('axios', () => ({
  defaults: {},
  post: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}), { virtual: true });

function AuthStateProbe() {
  const { currentUser } = useAuth();
  return <div>{currentUser ? 'authenticated' : 'guest'}</div>;
}

describe('AuthProvider inactivity logout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    localStorage.clear();
    mockNavigate.mockReset();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('logs out after 5 minutes without interactions', async () => {
    localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Test User' }));

    render(
      <AuthProvider>
        <AuthStateProbe />
      </AuthProvider>
    );

    await waitFor(() => expect(screen.getByText('authenticated')).toBeInTheDocument());

    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000);
    });

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/login'));
    expect(localStorage.getItem('user')).toBeNull();
    expect(screen.getByText('guest')).toBeInTheDocument();
  });

  test('resets inactivity timer when user interacts', async () => {
    localStorage.setItem('user', JSON.stringify({ id: 2, name: 'Active User' }));

    render(
      <AuthProvider>
        <AuthStateProbe />
      </AuthProvider>
    );

    await waitFor(() => expect(screen.getByText('authenticated')).toBeInTheDocument());

    act(() => {
      jest.advanceTimersByTime(4 * 60 * 1000);
      window.dispatchEvent(new Event('mousemove'));
      jest.advanceTimersByTime(2 * 60 * 1000);
    });

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(localStorage.getItem('user')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(3 * 60 * 1000);
    });

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/login'));
    expect(localStorage.getItem('user')).toBeNull();
  });
});
