import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  & > span {
    animation: dot-scale-fade 1.5s linear infinite;
    background-color: ${(props) => (props.color ? props.color : props.theme.colorPrimary1)};
    border-radius: 50%;
    display: inline-block;
    height: 20px;
    margin: 0 1px;
    opacity: 0;
    transform: scale(0.5);
    transform-origin: center center;
    width: 20px;
  }
  & > span:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > span:last-child {
    animation-delay: 0.6s;
  }

  @keyframes dot-scale-fade {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;

Div.propTypes = {
  color: PropTypes.string,
};

export default Div;
