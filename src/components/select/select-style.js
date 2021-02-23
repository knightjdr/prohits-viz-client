import styled from 'styled-components';

export const SelectContainer = styled.span`
  color: ${(props) => props.theme.fontDark};
  display: inline-block;
  width: 100%;

  label {
    box-sizing: border-box;
    display: inline-block;
    margin-bottom: 5px;
    margin-left: 3px;
    padding-right: 8px;
  }

  input {
    background-color: #fff;
    border-color: #cccccc;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    font-size: 1em;
    height: inherit;
    min-width: 100px;
    overflow-x: hidden;
    padding-left: 10px;
    padding-right: 15px;
    text-align: left;
    text-overflow: ellipsis;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${(props) => props.theme.timingFunction};
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
    transition-timing-function: ${(props) => props.theme.timingFunction};
  }
  .select__arrow_up {
    transform: rotate(180deg);
  }

  .select__clear {
    opacity: 0;
    position: absolute;
    right: 22px;
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ${(props) => props.theme.timingFunction};
  }
  .select__clear > button {
    height: 18px;
    width: 18px;
  }
  .select__clear > button > svg {
    height: 14px;
  }

  .select__input-container {
    align-items: center;
    display: flex;
    height: 30px;
    position: relative;
  }

  .select__placeholder {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 1em;
    height: inherit;
    left: 0;
    opacity: 0.7;
    padding-left: 10px;
    padding-right: 15px;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  input:focus,
  input:hover {
    border-color: ${(props) => props.theme.colorPrimary1};
  }

  input:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }
  input::-moz-focus-inner {
    border: 0;
  }

  input:hover + .select__clear,
  .select__clear:hover {
    opacity: 0.8;
  }
`;

export const Dropdown = styled.div`
  color: ${(props) => props.theme.fontDark};
  transition-timing-function: ${(props) => props.theme.timingFunction};
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  cursor: default;
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
    transition-timing-function: ${(props) => props.theme.timingFunction};
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

  .select__option:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .select__option:focus {
    background-color: #3271e7;
    color: #fff;
  }
`;
