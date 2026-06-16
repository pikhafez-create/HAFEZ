let queue:any[] = [];

export const addToQueue = (item:any) => {
  queue.push(item);
};

export const flushQueue = async (sendFn:any) => {
  for (const item of queue) {
    try {
      await sendFn(item);
    } catch (e) {
      return;
    }
  }
  queue = [];
};

export const getQueue = () => queue;
