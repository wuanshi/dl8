export function useDebounce(func: Function, delay: number = 300) {
  var timer: NodeJS.Timeout;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}
