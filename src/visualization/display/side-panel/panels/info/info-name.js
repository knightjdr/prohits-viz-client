import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../components/buttons/rectangular/button';
import Popconfirm from '../../../../../components/popconfirm/popconfirm-container';

const Name = ({
  loadNewFile,
  name,
}) => (
  <div className="panel__info-name">
    <div>
      File/session name:
    </div>
    <div>
      {name}
    </div>
    <Popconfirm
      onConfirm={loadNewFile}
      placement={['right', 'bottom']}
      title="Confirm: open new file"
    >
      <Button
        kind="secondary"
      >
        Load new file
      </Button>
    </Popconfirm>
  </div>
);

Name.propTypes = {
  loadNewFile: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Name;
