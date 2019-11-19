import styled from 'styled-components';

const UL = styled.ul`
  display: inline-flex;
  font-family: ${props => props.theme.fontStackPrimary};
  font-size: 1em;
  font-weight: 700;
  height: 40px;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    align-items: center;
    display: flex;
    padding: 0 8px;
  }
  & a.nav__link {
    color: ${props => props.theme.fontLight};
    text-decoration: none;
  }
  & a.nav__link:after {
    background: ${props => props.theme.fontLight};
    content: '';
    display: block;
    height: 2px;
    transition-duration: 0.3s;
    transition-property: width;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 0px;
  }
  & a.nav__link:focus {
    outline: none;
  }
  & a.nav__link:focus:after,
  & a.nav__link:hover:after,
  & a.nav__link:active:after {
    width: 100%;
  }

  .nav__link_active {
    background-color: ${props => props.theme.accentPrimary1}; 
  }
  .nav__link_active a {
    color: #1A1A1A; 
  }
  .nav__link_active a:after {
    background: ${props => props.theme.fontDark};
  }
`;

export default UL;
