document.writeln("Q9d");
const twice = (x) => x * 2;
document.writeln([1, 2, 3].map(twice).toString() === "2,4,6");

document.writeln("Q9e");
const divides = (x) => (y) => y % x === 0;
document.writeln([1, 2, 3, 4, 5, 6].filter(divides(3)).toString() === "3,6");

document.writeln("Q9f");
const join = (x) => (accu, cur) => String(accu) + x + cur;
document.writeln([1, 2, 3].reduce(join("-")), "");
document.writeln([1, 2, 3].reduce(join("-")) === "1-2-3");
