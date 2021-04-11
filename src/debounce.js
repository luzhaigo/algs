const debounce = (fn, ms) => {
  let id;
  return (...args) => {
    if (id) {
      clearTimeout(id);
      id = null;
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, ms);
  };
};

const t = debounce((...args) => {
  console.log(Date.now(), args);
}, 1000);

let ms = 500;
function tt() {
  setTimeout(() => {
    t('a', 'b', 'c');
    ms += 100;
    tt();
  }, ms);
}

tt();
