const throttle = (fn, ms) => {
  let id;
  return (...args) => {
    if (!id) {
      fn(...args);
      id = setTimeout(() => {
        id = null;
      }, ms);
    }
  };
};

const t = throttle((...args) => {
  console.log(Date.now(), args);
}, 1000);

function tt() {
  setTimeout(() => {
    t('a', 'b', 'c');
    tt();
  }, 5);
}

tt();
