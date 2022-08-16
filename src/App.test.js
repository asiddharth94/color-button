import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * global 'test' function in jest
 * {paramOne} - string description, more like test's name
 * {paramTwo} - test function
 * Tests fail if error is thrown while running test function (assertions throw error when expectations fail)
 * No error means Test is Pass! Thus, Empty Test Passes!!
 */
// test("renders learn react link", () => {
//   render(<App />); // 'render' creates virtual DOM for argument(JSX)
//   access V-DOM via 'screen' global object
//   const linkElement = screen.getByRole("link", { name: /learn react/i }); // finding element by display text using 'screen.getByText'
//   Lastly, assertion!
//   expect --> jest global, starts the assertion
//   expect's arg --> subject of the assertion
//   matcher (toBeInTheDocument) --> type of assertion, comes from jest-DOM
//   matcher argument --> refines matcher (not needed here)
//   expect(linkElement).toBeInTheDocument();
// });

// More Assertion examples
// --> expect(element.textContent).toBe('hello');
// --> expect(elementsArray).toHaveLength(7);

test("render a button", () => {
  render(<App />);
  // find an element with role of 'button' and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeInTheDocument();
});

test("button has correct initial color & turns blue when clicked and text updates accordingly", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});
