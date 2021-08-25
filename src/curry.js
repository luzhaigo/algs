const curry = (fn) => {
  const curried = (...arg) => {
    if (arg.length >= fn.length) return fn(...arg);

    return (...next) => curried(...arg, ...next);
  };

  return curried;
};
const add = curry((x, y, z) => x + y + z);

console.log("add(1)(2)(3)", add(1)(2)(3)); // should be 6
console.log("add(1, 2)(3)", add(1, 2)(3)); // should be 6
console.log("add(1)(2, 3)", add(1)(2, 3)); // should be 6
console.log("add(1, 2, 3)", add(1, 2, 3)); // should be 6