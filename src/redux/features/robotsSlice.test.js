import { deleRobotActionCreator, loadRobotsActionCreator } from "./robotsSlice";
import robotsReducer from "./robotsSlice";

describe("Given the loadRobots funtion", () => {
  describe("when its called with an array of 2 objects", () => {
    test("then it should return an array with the 2 objects", () => {
      const initialState = [];
      const expectedResult = [
        {
          _id: "627fa1264a1be5dc492c720d",
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2015/09/Star-Wars-C3PO-c%C3%B3mic-brazo-rojo.jpg?mrf-size=m",
          name: "C3PO",
          "create-date": "2022-05-21T22:00:00.000Z",
          resistance: 8,
          velocity: 1,
        },
        {
          _id: "627fa3874a1be5dc492c720e",
          image:
            "https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150926172435",
          name: "R2D2",
          "create-date": "2022-05-30T19:00:00.000Z",
          resistance: 10,
          velocity: 7,
        },
      ];

      const action = loadRobotsActionCreator(expectedResult);
      const result = robotsReducer(initialState, action);

      expect(result).toEqual(expectedResult);
    });
  });
});
describe("Given the deleteRobot funtion", () => {
  describe("when its called with an array of 2 objects and an id", () => {
    test("then it should return an array with the other object", () => {
      const initialState = [
        {
          _id: "627fa1264a1be5dc492c720a",
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2015/09/Star-Wars-C3PO-c%C3%B3mic-brazo-rojo.jpg?mrf-size=m",
          name: "C3PO",
          "create-date": "2022-05-21T22:00:00.000Z",
          resistance: 8,
          velocity: 1,
        },
        {
          _id: "627fa3874a1be5dc492c720e",
          image:
            "https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150926172435",
          name: "R2D2",
          "create-date": "2022-05-30T19:00:00.000Z",
          resistance: 10,
          velocity: 7,
        },
      ];
      const expectedResult = 1;

      const action = deleRobotActionCreator("627fa1264a1be5dc492c720a");
      const result = robotsReducer(initialState, action);

      expect(result).toHaveLength(expectedResult);
    });
  });
});
