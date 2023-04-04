console.clear(); // Clear the console

let Immediate = setImmediate(function alfa() {
  console.log("0.>", 12);
});

console.log("1.>", Immediate.hasRef());

console.log("2.>", Immediate.ref());

console.log("3.>", Immediate.unref());

console.log("4.>", Immediate.hasRef());

clearImmediate(Immediate);

console.log("5.>", 2);

