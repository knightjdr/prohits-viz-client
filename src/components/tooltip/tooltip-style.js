import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ${props => props.theme.timingFunction};
  background-color: white;
  border-radius: 3px;
  box-shadow: ${props => (props.shadow ? 'rgba(0, 0, 0, 0.25) 0px 5px 10px, rgba(0, 0, 0, 0.22) 0px 5px 10px' : 'none')};
  box-sizing: border-box;
  color: ${props => props.theme.fontDark};
  font-family: ${props => props.theme.fontStackPrimary};
  font-size: 0.9em;
  opacity: 0;
  overflow-wrap: anywhere;
  padding: 5px;
  pointer-events: none;
  position: fixed;
  z-index: 2147483647;

  &.open {
    animation-name: tooltipfadein;
  }
  &.close {
    animation-name: tooltipfadeout;
  }

  @keyframes tooltipfadein {
    0% {
      height: 0;
      opacity: 0;
    }
    1% {
      height: auto;
      opacity: 0.01;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
  @keyframes tooltipfadeout {
    0% {
      height: auto;
      opacity: 1;
    }
    99% {
      height: auto;
      opacity: 0.01;
    }
    100% {
      height: 0;
      opacity: 0;
    }
  }
`;

Span.defaultProps = {
  shadow: true,
};

Span.propTypes = {
  shadow: PropTypes.bool,
};

export default Span;
