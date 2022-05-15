import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const RobotsListContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <RobotsListContainer>
      {robots.map((robot) => {
        return (
          <Robot
            key={robot.name}
            date={robot.date}
            name={robot.name}
            image={robot.image}
            id={robot._id}
            velocity={robot.velocity}
            resistance={robot.resistance}
          />
        );
      })}
    </RobotsListContainer>
  );
};

export default RobotsList;
