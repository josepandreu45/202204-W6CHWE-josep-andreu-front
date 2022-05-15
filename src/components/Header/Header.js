import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 15px;
  padding-bottom: 40px;
  color: #d9a406;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    margin-left: -10px;
    margin-top: -30px;
    width: 225px;
  }
  img {
    width: 225px;
    height: 225px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src="https://img.icons8.com/color/344/star-wars.png" alt="logo" />
      <h1>ROBOTS</h1>
    </HeaderContainer>
  );
};

export default Header;
