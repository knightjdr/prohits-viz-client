import styled from 'styled-components';

import Button from '../../buttons/rectangular/button';

const A = styled(Button).attrs({
  as: 'a',
})`
  text-decoration: none;
`;

export default A;
