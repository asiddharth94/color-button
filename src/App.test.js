import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // 'render' creates virtual DOM for argument(JSX)
  // access V-DOM via 'screen' global object
  const linkElement = screen.getByText(/learn react/i); // finding element by display text using 'screen.getByText'
  expect(linkElement).toBeInTheDocument(); // Lastly, assertion!
});
