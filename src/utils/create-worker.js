import * as Comlink from 'comlink';

const createWorker = (Worker) => {
  const worker = new Worker();
  const workerObj = Comlink.wrap(worker);

  const runWorker = async (...args) => {
    await workerObj.run(args);
    return workerObj.data;
  };

  return runWorker;
};

export default createWorker;
