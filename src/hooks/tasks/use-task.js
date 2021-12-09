import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import fetch from '../../utils/fetch';
import getFile from '../../utils/get-file';

const useTask = () => {
  const [fetchingText, setFetchingText] = useState(false);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const navigate = useNavigate();

  const download = async (e) => {
    const { name, taskid, tool } = e.currentTarget.dataset;
    const downloadName = name || `${tool}-${taskid}`;
    const options = {
      ext: 'zip',
      name: downloadName,
    };
    await getFile(`/task/${taskid}`, options);
  };

  const fetchText = async (taskid, file) => {
    setFetchingText(true);
    const route = `/task/${taskid}/${file}`;
    const response = await fetch(route, { responseType: 'text' });
    if (!response.error) {
      setText(response.data);
    } else {
      setText(`There was a problem retrieving the ${file} file`);
    }
    setFetchingText(false);
  };

  const handleChangeFile = (e, id, value) => {
    setSelectedFile(value);
    setText('');
  };

  const viewImage = (e, specifcFile) => {
    const { primaryfile, taskid } = e.currentTarget.dataset;
    const file = specifcFile || selectedFile || primaryfile;
    if (file === 'error' || file === 'log') {
      fetchText(taskid, file);
    } else {
      navigate(`/visualization/${taskid}/${file}`);
    }
  };

  return {
    download,
    handleChangeFile,
    fetchText,
    fetchingText,
    selectedFile,
    text,
    viewImage,
  };
};

export default useTask;
