function aa(...args) {
  console.log(this, ...args);
}
function bind(fn, obj) {
  return fn.bind.apply(fn, [obj]);
}

function func(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var localArgs = [].slice.call(arguments);
    return fn.apply(fn, args.concat(localArgs));
  };
}

function add(a, b) {
  return a + b;
}

// setTimeout(aa.bind.call(aa, { z: 1 }), 100, 1, 2, 3, 4, 5, 6);

var defer =
  typeof setImmediate !== 'function'
    ? setImmediate
    : function (fn) {
        process.nextTick(fn.bind.apply(fn, arguments));
      };

defer(
  (...args) => {
    console.log(...args);
  },
  1,
  2,
  3,
  4,
  5,
);
