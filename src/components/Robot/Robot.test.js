import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot Component", () => {
  describe("When its instantiated", () => {
    test("then it should render an img", () => {
      render(<Robot />);

      const receivedElement = screen.getByRole("list");

      expect(receivedElement).toBeInTheDocument();
    });
  });
  test("then it should render 3 li", () => {
    const expectedLength = 3;

    render(<Robot />);

    const receivedElement = screen.getAllByRole("listitem");

    expect(receivedElement).toHaveLength(expectedLength);
  });
});
