import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from '../App';

let container = null;
beforeEach(() => {
  // cài đặt một DOM element như là target cho render
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // dọn dẹp lúc thoát
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});