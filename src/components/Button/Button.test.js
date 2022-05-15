import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a button", () => {
      render(<Button />);

      const receivedElement = screen.getByRole("button");

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
