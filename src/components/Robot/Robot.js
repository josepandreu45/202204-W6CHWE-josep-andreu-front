import styled from "styled-components";

const RobotContainer = styled.div``;

const Robot = ({ name, image, resistance, velocity, id }) => {
  return (
    <RobotContainer>
      <img src={image} alt="robot" />
      <h2>{name}</h2>
      <ul>
        <li>{id}</li>
        <li>{resistance}</li>
        <li>{velocity}</li>
      </ul>
    </RobotContainer>
  );
};

export default Robot;
