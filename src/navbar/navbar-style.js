import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  background-color: ${props => props.route === 'home' ? props.theme.colorSecondary1 : props.theme.colorPrimary1};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: ${props => props.theme.fontLight};
  display: flex;
  font-family: ${props => props.theme.fontStackSecondary};
  height: 40px;
  padding: 0 10px 0 5px;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100vw;
  z-index: 5;

  .nav__icon {
    align-items: center;
    color: ${props => props.theme.fontLight};
    display: flex;
    height: 100%;
    padding: 0 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  .nav__icon:focus,
  .nav__icon:hover {
    background-color: ${props => props.route === 'home' ? 'rgba(42, 49, 50, 0.6)' : 'rgba(245, 245, 245, 0.9)'};
  }

  .nav__right {
    align-items: center;
    display: flex;
    font-family: ${props => props.theme.fontStackPrimary};
    margin-left: auto;
  }
`;

export default Nav;
