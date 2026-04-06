import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}), { virtual: true });

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    currentUser: null,
    logout: jest.fn(),
  }),
}));

const renderNavbar = () => render(<Navbar />);

test('renders transparent navbar and no doGood brand text', () => {
  renderNavbar();

  const appBar = screen.getByRole('banner');
  const backgroundColor = window.getComputedStyle(appBar).backgroundColor;
  expect(['transparent', 'rgba(0, 0, 0, 0)', '']).toContain(backgroundColor);

  expect(screen.getByLabelText('Go to homepage')).toBeInTheDocument();
  expect(screen.queryByText('doGood')).not.toBeInTheDocument();
});
