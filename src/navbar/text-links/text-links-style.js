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
    padding: 0 5px;
  }
  & a {
    color: ${props => props.theme.fontLight};
    text-decoration: none;
  }
  & a:after {
    background: ${props => props.theme.fontLight};
    content: '';
    display: block;
    height: 2px;
    transition-duration: 0.3s;
    transition-property: width;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 0px;
  }
  & a:focus {
    outline: none;
  }
  & a:focus:after,
  & a:hover:after,
  & a:active:after {
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
