import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';

import Button from '../../buttons/rectangular/button';

const Link = styled(Button).attrs(() => ({
  as: ({ shadow, ...props }) => <A {...props} />,
}))`
  text-decoration: none;
`;

export default Link;
