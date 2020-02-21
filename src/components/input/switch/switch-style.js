import styled, { css } from 'styled-components';

const Span = styled.span`
  align-items: center;
  color: ${props => props.theme.fontDark};
  display: flex;

  input {
    appearance: none;
    border-radius: 34px;
    cursor: pointer;
    height: 24px;
    margin: 0;
    opacity: 0;
    width: 40px;
  }

  label {
    padding-right: 8px;
  }

  .input__switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 40px;
  }
  .input__switch-slider {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    box-sizing: border-box;
    content: '';
    display: flex;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 100%;
  }
  .input__switch-slider::after {
    background-color: #fff;
    border-radius: 50%;
    content: '';
    height: 20px;
    left: 2px;
    position: absolute;
    transition-duration: 0.3s;
    transition-property: left;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 20px;
  }

  input:checked + div {
    background-color: ${props => props.theme.colorPrimary3};
  }
  input:checked + div::after {
    left: 18px;
  }

  input:focus:not(:disabled) + div,
  input:hover:not(:disabled) + div {
    background-color: ${props => props.theme.colorPrimary1};
  }

  input:disabled {
    cursor: not-allowed;
  }

  ${props => (props.vertical
    && css`& {
      flex-direction: column;
    }
    label {
      margin-bottom: 5px;
    }`
  )};
`;

export default Span;
