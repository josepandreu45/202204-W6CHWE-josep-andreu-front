import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const RobotsListContainer = styled.div``;

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <RobotsListContainer>
      {robots.map((robot) => {
        return (
          <Robot
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
