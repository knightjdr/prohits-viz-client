import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from './image';

import fetch from '../../../../../../utils/fetch';
import download from '../../../../../../utils/download';
import useExportImage from './use-export-image';
import { clearExportImage, setExportFormat } from '../../../../../../state/visualization/export/export-actions';
import { selectState, selectStateProperty } from '../../../../../../state/selector/general';

const ImageContainer = () => {
  const dispatch = useDispatch();
  const exporter = useSelector((state) => selectState(state, 'exporter'));
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  const exportImage = useExportImage();

  const handleChange = (e, id, newFormat) => {
    dispatch(setExportFormat(newFormat));
  };

  const handleSave = () => {
    if (imageType === 'scatter') {
      const svg = document.getElementById('svg-main');
      download(svg.outerHTML, 'image.svg');
    } else {
      exportImage();
    }
  };

  useEffect(() => {
    if (exporter.file) {
      const fetchFile = async () => {
        const param = encodeURIComponent(exporter.file);
        const response = await fetch(`/file/${param}`, {}, 'blob');
        download(response.data, `image.${exporter.format}`);
      };
      fetchFile();
      dispatch(clearExportImage());
    }
  }, [dispatch, exporter]);

  return (
    <Image
      exporter={exporter}
      handleChange={handleChange}
      handleSave={handleSave}
      imageType={imageType}
    />
  );
};

export default ImageContainer;
