import * as Comlink from 'comlink';

const createWorker = (Worker) => {
  const worker = new Worker();
  const workerObj = Comlink.wrap(worker);

  const runWorker = async (form, file) => {
    await workerObj.run(form, file);
    return workerObj.data;
  };

  return runWorker;
};

export default createWorker;
