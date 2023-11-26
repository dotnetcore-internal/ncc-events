function promiseDebounce(func: Function, wait: number) {
  let promise: Promise<void> = Promise.resolve();
  return function(...args: any[]) {
    promise = promise.then(() => {
      func(...args);
    });
    setTimeout(() => {
      promise = Promise.resolve();
    }, wait);
  };
}

export { promiseDebounce };