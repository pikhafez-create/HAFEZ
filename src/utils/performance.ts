let lastUpdate = 0;

export const throttle = (fn:any, limit:number) => {
  return (...args:any[]) => {
    const now = Date.now();
    if (now - lastUpdate >= limit) {
      lastUpdate = now;
      fn(...args);
    }
  };
};

export const debounce = (fn:any, delay:number) => {
  let timer:any;
  return (...args:any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
