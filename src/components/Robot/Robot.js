import styled from "styled-components";
import Button from "../Button/Button";

const RobotContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 550px;
  border: 3px solid yellow;
  border-radius: 15px;
  overflow: hidden;
  background-color: #343a40;
  align-items: center;
  padding-bottom: 10px;
  color: yellow;
  .robot-image {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

const Robot = ({ name, image, resistance, velocity, id }) => {
  return (
    <RobotContainer>
      <img className="robot-image" src={image} alt="robot" />
      <h2>{name}</h2>
      <ul>
        <li>ID: {id}</li>
        <li>Resistance: {resistance}</li>
        <li>Velocity: {velocity}</li>
      </ul>
      <Button text={"../../images/delete.png"} />
    </RobotContainer>
  );
};

export default Robot;
