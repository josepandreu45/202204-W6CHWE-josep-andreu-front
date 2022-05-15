import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Robot from "./Robot";
import store from "../../redux/store/store";

describe("Given a Robot Component", () => {
  describe("When its instantiated", () => {
    test("then it should render an img", () => {
      render(
        <Provider store={store}>
          <Robot />
        </Provider>
      );

      const receivedElement = screen.getByRole("list");

      expect(receivedElement).toBeInTheDocument();
    });
  });
  test("then it should render 3 li", () => {
    const expectedLength = 3;

    render(
      <Provider store={store}>
        <Robot />
      </Provider>
    );

    const receivedElement = screen.getAllByRole("listitem");

    expect(receivedElement).toHaveLength(expectedLength);
  });
});
