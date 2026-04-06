import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}), { virtual: true });

test('renders footer links and copyright text', () => {
  render(<Footer />);
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /contact/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /faq/i })).not.toBeInTheDocument();
  expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
});
