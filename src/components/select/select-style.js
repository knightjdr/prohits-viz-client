import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme.fontDark};

  label {
    margin-right: 8px;
    position: relative;
  }

  select {
    appearance: none;
    border: none;
    box-sizing: border-box;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .select__dropdown {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .select__dropdown-container {
    display: inline-block;
    height: 30px;
    position: relative;
    width: auto;
  }
  .select__selected-value {
    appearance: none;
    align-items: center;
    background-color: #fff;
    border-color: #cccccc;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: inline-flex;
    height: 100%;
    font-size: 1em;
    padding: 0 10px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 100%;
  }
  .select__selected-value > svg {
    margin-left: auto;
    margin-top: 2px;
    opacity: 0.6;
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ${props => props.theme.timingFunction};
  }
  .select__arrow_open {
    transform: rotate(180deg);
  }

  select:focus + span > .select__selected-value,
  select:hover + span > .select__selected-value,
  .select__selected-value:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }
`;

export default Span;
