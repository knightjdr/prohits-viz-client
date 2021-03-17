import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import fetch from '../../utils/fetch';
import getFile from '../../utils/get-file';

const useTask = () => {
  const [fetchingText, setFetchingText] = useState(false);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const history = useHistory();

  const download = async (e) => {
    const { taskid, tool } = e.currentTarget.dataset;
    const options = {
      ext: 'zip',
      name: `${tool}-${taskid}`,
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
      history.push(`/visualization/${taskid}/${file}`);
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
