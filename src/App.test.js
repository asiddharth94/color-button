import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * global 'test' function in jest
 * {paramOne} - string description, more like test's name
 * {paramTwo} - test function
 * Tests fail if error is thrown while running test function (assertions throw error when expectations fail)
 * No error means Test is Pass! Thus, Empty Test Passes!!
 */
test("renders learn react link", () => {
  render(<App />); // 'render' creates virtual DOM for argument(JSX)
  // access V-DOM via 'screen' global object
  const linkElement = screen.getByText(/learn react/i); // finding element by display text using 'screen.getByText'
  // Lastly, assertion!
  // expect --> jest global, starts the assertion
  // expect's arg --> subject of the assertion
  // matcher (toBeInTheDocument) --> type of assertion, comes from jest-DOM
  // matcher argument --> refines matcher (not needed here)
  expect(linkElement).toBeInTheDocument();
});

// More Assertion examples
// --> expect(element.textContent).toBe('hello');
// --> expect(elementsArray).toHaveLength(7);
