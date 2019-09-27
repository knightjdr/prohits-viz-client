import styled from 'styled-components';

export const SelectContainer = styled.span`
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
    overflow-x: hidden;
    padding: 0 10px;
    padding-right: 15px;
    text-align: left;
    text-overflow: ellipsis;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: inherit;
    white-space: nowrap;
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

  .select__input-container {
    height: 30px;
    position: relative;
  }

  input:focus,
  input:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  input:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }
  input::-moz-focus-inner {
    border: 0;
  }
`;

export const Dropdown = styled.div`
  color: ${props => props.theme.fontDark};
  transition-timing-function: ${props => props.theme.timingFunction};
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  list-style: none;
  max-height: 350px;
  opacity: 0;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  transform: scaleY(0);
  transition-duration: 0.2s;
  transition-property: opacity, transform;
  transition-timing-function: inherit;
  z-index: 2147483647;

  &.select__dropdown_visible {
    opacity: 1;
    transform: scaleY(1);
  }

  .select__opt-group {
    background-color: #eeeeee;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9em;
    height: 30px;
    padding: 4px 10px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .select__option {
    box-sizing: border-box;
    height: 35px;
    overflow-x: hidden;
    padding: 6px 10px;
    text-align: left;
    text-overflow: ellipsis;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: inherit;
    white-space: nowrap;
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

  &.select__dropdown:focus,
  .select__option:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }
  &.select__dropdown::-moz-focus-inner,
  .select__option::-moz-focus-inner {
    border: 0;
  }

  .select__option:focus {
    background-color: #3271e7;
    color: #fff;
  }
  .select__option:hover {
    color: #2468e5;
  }
  .select__option:hover:focus {
    color: #fff;
  }
`;
