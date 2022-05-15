import styled from "styled-components";

const ButtonContainer = styled.div``;

const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <button>{text}</button>
    </ButtonContainer>
  );
};

export default Button;
