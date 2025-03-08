{
  document.writeln("(Task: Q7:1)");
  const T = (x) => (y) => x;
  const F = (x) => (y) => y;

  const pair = (a) => (b) => (f) => f(a)(b);
  const fst = (p) => p(T);
  const snd = (p) => p(F);

  const oneTwo = pair(1)(2);
  document.writeln(fst(oneTwo) === 1);

  document.writeln("(Task: Q7:2)");
  //oneTwo = pair(1, 2);
  //document.writeln(fst(oneTwo) === 1);
  document.writeln(false);
  //document.writeln(fst(pair(1, 2)));

  document.writeln("(Task: Q7:3)");
  const pairEq = (a) => (b) => fst(a) === fst(b) && snd(a) === snd(b);
  const pairMap = (f) => (p) => pair(f(fst(p)))(f(snd(p)));

  //const oneTwo = pair(1)(2);
  const square = (x) => x * x;
  const result = pairMap(square)(oneTwo);
  document.writeln(pairEq(result)(pair(1)(4)));

  document.writeln("(Task: Q7:4)");
  //fst(oneTwo) = 0;
  //document.writeln(fst(oneTwo) === 0);
  document.writeln(false);

  document.writeln("(Task: Q7:5)");
  // fst(oneTwo) = 0;
  // document.writeln(fst(oneTwo) === 0);
  document.writeln("throws ReferenceError! ->");
  document.writeln(true);

  document.writeln("(Task: Q7:6)");
  const pairPlus = (a) => (b) => pair(fst(a) + fst(b))(snd(a) + snd(b));
  const sum = pairPlus(oneTwo)(oneTwo);
  document.writeln(pairEq(sum)(pair(2)(4)));
}

// ------------------------------------------------------//
{
  document.writeln("(Task: Q8:1)");
  const s1 = (x) => (y) => (z) => x;
  const s2 = (x) => (y) => (z) => y;
  const s3 = (x) => (y) => (z) => z;

  const triple = (x) => (y) => (z) => (f) => f(x)(y)(z);
  const a = (t) => t(s1);
  const b = (t) => t(s2);
  const c = (t) => t(s3);

  const person = triple;
  const firstname = a;
  const lastname = b;
  const age = c;

  const bran = person("Brendan");
  const raven = bran("Stark")(16);
  const eich = bran("Eich")(50);

  document.writeln(age(raven) === 16);

  document.writeln("(Task: Q8:2)");
  //const person = triple;
  const bran2 = person("Brendan")("Eich")(50);
  document.writeln(firstname(bran2) === "Brendan");

  document.writeln("(Task: Q8:3)");
  const oneTwoThree = triple(1)(2)(3);
  document.writeln(a(oneTwoThree) === 1);

  document.writeln("(Task: Q8:4)");
  document.writeln(firstname(bran) === "Brendan");

  document.writeln("(Task: Q8:5)");
  const oneTwoThree_2 = triple(1);
  document.writeln(a(oneTwoThree_2) === 1);
}

//--------------------------------------------------
{
  document.writeln("(Task: Q9:1)");
  const Left = (x) => (f) => (g) => f(x);
  const Right = (x) => (f) => (g) => g(x);
  const either = (e) => (f) => (g) => e(f)(g);

  const safeDiv = (num) => (divisor) =>
    divisor === 0 ? Left("cannot divide by 0") : Right(num / divisor);

  const result = safeDiv(1)(1);

  either(result)((msg) => document.writeln(msg))((val) =>
    document.writeln(val === 1),
  );

  document.writeln("(Task: Q9:2)");
  const result2 = safeDiv(1)(0);
  either(result2)((msg) => document.writeln(msg));
  document.writeln(true);

  document.writeln("(Task: Q9:3)");
  either(result2)((msg) => document.writeln(msg))((val) =>
    document.writeln(val === 1),
  );
  document.writeln("-> true");

  document.writeln("(Task: Q9:4)");
  either(result2)((msg) => document.writeln(msg));
  document.writeln(false);

  document.writeln("(Task: Q9:5)");
  document.writeln("duplicate of 4 ???");

  //----------------------------------------------
  document.writeln("(Task: Q9c)");
  const id = (x) => x;

  const eShow = (x) => (y) => (z) => z === 0;
  document.writeln(eShow(safeDiv(1)(0)));
  // const eShow = (f) => (x) => (y) =>
  //   y === 0 ? Left(f) : Right((f) => "Result is: " + x);

  //Test:
  const x_ = Math.random();
  const safeDiv2 = (num) => (divisor) =>
    divisor === 0 ? Left("Cannot divide by 0") : Right(num / divisor);
  document.writeln(eShow(safeDiv2(1)(0)) === "Cannot divide by 0");
  document.writeln(eShow(safeDiv2(x_)(1)) === "Result is: " + x_);
}
