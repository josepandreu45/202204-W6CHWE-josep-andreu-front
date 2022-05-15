import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteRobotThunk } from "../../redux/thunks/thunks";
import Button from "../Button/Button";

const RobotContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 550px;
  border: 3px solid #d9a406;
  border-radius: 15px;
  overflow: hidden;
  background-color: #343a40;
  align-items: center;
  padding-bottom: 10px;
  color: #d9a406;
  .robot-image {
    height: 100%;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    gap: 10px;
  }
`;

const Robot = ({ name, image, resistance, velocity, id, date }) => {
  const dispatch = useDispatch();

  return (
    <RobotContainer>
      <img className="robot-image" src={image} alt="robot" />
      <h2>{name}</h2>
      <ul>
        <li>Fecha de Creacion: {date}</li>
        <li>Resistencia: {resistance}</li>
        <li>Velocidad: {velocity}</li>
      </ul>
      <Button
        action={() => dispatch(deleteRobotThunk(id))}
        text={"../../images/delete.png"}
      />
    </RobotContainer>
  );
};

export default Robot;
