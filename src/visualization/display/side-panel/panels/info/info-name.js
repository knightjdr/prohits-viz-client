import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../components/buttons/rectangular/button';

const Name = ({
  name,
}) => (
  <div className="panel__info-name">
    <div>
      File/session name:
    </div>
    <div>
      {name}
    </div>
    <div>
      <Button
        kind="secondary"
      >
        Load new file
      </Button>
    </div>
  </div>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
