import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    cursor: pointer;
    display: inline-block;
    border: none;
    background: none;
  }
  img {
    height: 50px;
  }
`;

const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <button>
        <img src={text} alt="delete" />
      </button>
    </ButtonContainer>
  );
};

export default Button;
