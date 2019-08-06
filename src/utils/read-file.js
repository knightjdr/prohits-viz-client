const readFile = file => (
  new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsText(file);
    } else {
      reject(new Error('Missing file'));
    }
  })
);

export default readFile;
