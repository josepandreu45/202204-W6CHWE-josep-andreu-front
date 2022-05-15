import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RobotsList from "./RobotsList";
import mockRobots from "../../mocks/mockRobots";

const mockUseSispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockRobots,
  useDispatch: () => {
    return mockUseSispatch;
  },
}));

describe("Given a RobotsList component", () => {
  describe("When its instantiated with an array with 4 robots", () => {
    test("Then it should render 4 ul", () => {
      const expectedResult = 4;

      render(
        <Provider store={store}>
          <RobotsList></RobotsList>
        </Provider>
      );

      const result = screen.getAllByRole("list");

      expect(result).toHaveLength(expectedResult);
    });
  });
});
