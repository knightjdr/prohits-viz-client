import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Button from '../../../../../../components/buttons/rectangular/button';

const NeedSynching = ({
  syncMinimap,
}) => (
  <Fragment>
    <p>Map not in sync with image</p>
    <Button
      kind="secondary"
      onClick={syncMinimap}
      shadow
      type="button"
    >
      Sync
    </Button>
  </Fragment>
);

NeedSynching.propTypes = {
  syncMinimap: PropTypes.func.isRequired,
};

export default NeedSynching;
