import styled from 'styled-components';

const Div = styled.div`
  margin-right: 8px;
  position: relative;
  z-index: 20;

  & button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  & button:focus {
    outline: 0;
  }
  & button:focus *,
  & button:hover * {
    fill: ${props => (props.route === 'home' ? props.theme.colorPrimary1 : props.theme.accentPrimary1)};
  }

  & .nav__menu {
    height: 20px;
    width: 25px;
  }
  & .nav__menu > * {
    transition: fill 0.3s ease;
    fill: ${props => props.theme.fontLight};
  }

  & ul {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);
    font-family: ${props => props.theme.fontStackPrimary};
    margin: 0;
    list-style: none;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transform-origin: 97% 2%;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
  }

  & li {
    padding: 2px 5px;
    text-transform: uppercase;
  }

  & a {
    color: ${props => props.theme.fontDark};
    display: block;
    text-decoration: none;
    width: 100%;
  }
  & a:after {
    background: ${props => props.theme.fontDark};
    content: '';
    display: block;
    height: 1px;
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
`;

export default Div;
