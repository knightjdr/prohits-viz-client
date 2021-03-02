import React from 'react';
import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

import Button from '../../buttons/rectangular/button';

const Link = styled(Button).attrs(() => ({
  // eslint-disable-next-line react/prop-types
  as: ({ shadow, ...props }) => <A {...props} />,
}))`
  text-decoration: none;
`;

export default Link;
