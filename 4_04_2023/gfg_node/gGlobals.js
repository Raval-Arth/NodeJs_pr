setImmediate(function A() {
  setImmediate(function B() {
    console.log(1);
    setImmediate(function D() {
      console.log(2);
    });
  });

  setImmediate(function C() {
    console.log(3);
    setImmediate(function E() {
      console.log(4);
    });
  });
});

let si = setInterval(function A() {
  return console.log("Hello World!");
}, 1000);

setTimeout(function B() {
  return console.log("Hello World!--");
}, 1000);

setTimeout(function () {
  clearInterval(si);
}, 2000);
