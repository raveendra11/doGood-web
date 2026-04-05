import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}), { virtual: true });

test('renders footer links and copyright text', () => {
  render(<Footer />);
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
  expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
});
