import React from 'react';
import styled from 'styled-components';

import A from '../text/a';
import Button from '../../buttons/rectangular/button';

const Link = styled(Button).attrs(() => ({
  // eslint-disable-next-line react/prop-types
  as: ({ shadow, ...props }) => <A {...props} />,
}))`
  text-decoration: none;
`;

export default Link;
