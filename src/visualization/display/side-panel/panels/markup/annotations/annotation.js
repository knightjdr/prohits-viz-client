import PropTypes from 'prop-types';
import React from 'react';

import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Section from '../../section/section';

const Annotation = ({}) => (
  <Section
    border={false}
    title="Annotations"
  >
    <ColorPicker
      placement={['right', 'bottom']}
    />
  </Section>
);

Annotation.propTypes = {};

export default Annotation;
