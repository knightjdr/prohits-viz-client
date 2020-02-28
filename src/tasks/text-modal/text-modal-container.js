import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import TextModal from './text-modal';

const TextModalContainer = ({
  fetchingText,
  selectedFile,
  text,
}) => {
  const [open, setOpen] = useState(fetchingText);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (fetchingText) {
      setOpen(true);
    }
  }, [fetchingText]);

  return (
    <TextModal
      handleClose={handleClose}
      open={open}
      selectedFile={selectedFile}
      text={text}
    />
  );
};

TextModalContainer.propTypes = {
  fetchingText: PropTypes.bool.isRequired,
  selectedFile: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextModalContainer;
