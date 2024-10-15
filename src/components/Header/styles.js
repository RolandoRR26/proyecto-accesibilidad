import styled from 'styled-components';


const HeaderContainer = styled.section`
  background-color: #9AFFE7; 
  padding: 20px;
  font-family: Montserrat;
`;


const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;


const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  padding: 0;
`;


const NavLink = styled.a`
  color: #8F26FF;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;

  &:hover {
    color: #481380; 
  }

  &:focus {
    outline: 2px solid #ffcc00;
    outline-offset: 4px;
  }
`;

export {HeaderContainer,Nav,NavList,NavLink};