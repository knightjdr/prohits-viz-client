import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme.fontDark};
  transition-timing-function: ${props => props.theme.timingFunction};

  label {
    margin-right: 8px;
  }

  input {
    background-color: #fff;
    border-color: #cccccc;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    font-size: 1em;
    height: 30px;
    padding: 0 10px;
    text-align: left;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: inherit;
    width: 100%;
  }

  .select__arrow {
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    right: 8px;
    top: 8px;
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: inherit;
  }
  .select__arrow_up {
    transform: rotate(180deg);
  }

  .select__dropdown {
    height: 30px;
    display: inline-block;
    width: 100%;
    z-index: 5;
  }

  .select__input-container {
    display: inline-block;
    position: relative;
    width: 100%;
  }

  .select__menu {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    list-style: none;
    margin-top: 5px;
    opacity: 0;
    padding: 0;
    transform: scaleY(0);
    transform-origin: center top;
    transition-duration: 0.2s;
    transition-property: all;
    transition-timing-function: inherit;
  }
  .select__menu_visible {
    opacity: 1;
    transform: scaleY(1);
  }

  .select__option {
    background-color: transparent;
    border: none;
    font-size: 1em;
    padding: 6px 10px;
    text-align: left;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: inherit;
    width: 100%;
  }
  .select__option[aria-selected="true"] {
    font-weight: bold;
  }
  .select__option:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .select__option:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  input:focus,
  input:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  button:focus,
  input:focus,
  .select__menu:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner,
  .select__menu::-moz-focus-inner {
    border: 0;
  }

  .select__option:focus {
    background-color: #3271e7;
    color: #fff;
  }
  .select__option:hover {
    color: #2468e5;
  }
`;

export default Span;
