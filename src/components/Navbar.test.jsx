import { fireEvent, render, screen, within } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  NavLink: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}), { virtual: true });

const mockUseAuth = jest.fn();

jest.mock('../context/AuthContext', () => ({
  useAuth: () => mockUseAuth(),
}));

const renderNavbar = () => render(<Navbar />);

beforeEach(() => {
  mockUseAuth.mockReturnValue({
    currentUser: null,
    logout: jest.fn(),
  });
});

test('renders the AppBar and brand link without the doGood wordmark', () => {
  renderNavbar();

  const appBar = screen.getByRole('banner');
  // The outer AppBar stays transparent; the gradient lives on the inner Toolbar
  // so content can still scroll under a frosted surface.
  const backgroundColor = window.getComputedStyle(appBar).backgroundColor;
  expect(['transparent', 'rgba(0, 0, 0, 0)', '']).toContain(backgroundColor);

  const brand = screen.getByLabelText('Go to homepage');
  expect(brand).toBeInTheDocument();
  // The logo is present but the wordmark is intentionally not rendered
  expect(within(brand).queryByText('doGood')).not.toBeInTheDocument();
  expect(within(brand).queryByText('Together')).not.toBeInTheDocument();
});

test('exposes Login and Register actions for signed-out users', () => {
  renderNavbar();

  // The two auth actions must be present and use the expected routes
  const loginLink = screen.getByRole('link', { name: /^login$/i });
  const registerLink = screen.getByRole('link', { name: /^register$/i });
  expect(loginLink).toHaveAttribute('href', '/login');
  expect(registerLink).toHaveAttribute('href', '/register');
});

test('shows dashboard, profile and logout menu items for authenticated users', () => {
  mockUseAuth.mockReturnValue({
    currentUser: { name: 'Test User', email: 'test@example.com' },
    logout: jest.fn(),
  });
  renderNavbar();

  fireEvent.click(screen.getByLabelText(/account menu for test user/i));

  const menu = screen.getByRole('menu');
  expect(within(menu).getByText('Test User')).toBeInTheDocument();
  expect(within(menu).getByText('test@example.com')).toBeInTheDocument();
  expect(within(menu).getByText('Dashboard')).toBeInTheDocument();
  expect(within(menu).getByText('Profile')).toBeInTheDocument();
  expect(within(menu).getByText('Logout')).toBeInTheDocument();
});
