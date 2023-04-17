import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Submit Name Button on load', () => {
  render(<App />);
  const buttonText = screen.getByText(/Submit Name/i);
  expect(buttonText).toBeInTheDocument();
});

test('renders Shelf Input and Current Layout on warehouse name submit', async () => {
  render(<App />);
  await userEvent.type(screen.getByRole('textbox'), 'Hello World!');
  await userEvent.click(screen.getByRole('button'));

  expect(screen.getByText(/shelf input/i)).toBeInTheDocument();
});

test('renders shelf information under Current Layout on add shelf submit', async () => {
  render(<App />);
  await userEvent.type(screen.getByRole('textbox'), 'Hello World!');
  await userEvent.click(screen.getByRole('button'));
  await userEvent.type(screen.getByRole('textbox'), 'Hello!');
  await userEvent.selectOptions(screen.getByRole('combobox'), '1')
  await userEvent.click(screen.getByRole('button', { name: /add shelf/i}));

  expect(screen.getAllByText(/hello/i)).toHaveLength(2);
  expect(screen.getByText(/zone 1/i)).toBeInTheDocument();
});
