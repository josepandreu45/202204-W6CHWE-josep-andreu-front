import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 15px;
  padding: 5px;
  color: yellow;
  font-size: 25px;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>ROBOTS</h1>
    </HeaderContainer>
  );
};

export default Header;
