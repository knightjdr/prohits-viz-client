import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../components/buttons/rectangular/button';
import Popconfirm from '../../../../../components/popconfirm/popconfirm';

const LoadButton = (
  <Button
    kind="secondary"
  >
    Load new file
  </Button>
);

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
      button={LoadButton}
      onConfirm={loadNewFile}
      placement={['right', 'bottom']}
      title="Confirm: open new file"
    />
  </div>
);

Name.propTypes = {
  loadNewFile: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Name;
