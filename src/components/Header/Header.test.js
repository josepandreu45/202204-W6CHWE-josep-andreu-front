import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a heading", () => {
      render(<Header />);

      const receivedElement = screen.getByRole("heading");

      expect(receivedElement).toBeInTheDocument();
    });
  });
});
