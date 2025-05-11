// {
//   document.writeln("(Q23 - Promise) (1)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const inc = (n) => n + 1;
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1)
//     .then(writer)
//     .then(inc)
//     .then(writer)
//     .then(filterEven)
//     .then(writer);
// }
// {
//   document.writeln("(2)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1).then(writer).then(filterEven).then(writer);
// }
// {
//   document.writeln("(2)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1).then(writer).then(filterEven).then(writer);
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1)
//     .then(writer)
//     .then((it) => it + 1)
//     .then(writer);
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1)
//     .then(writer)
//     .then((it) => document.writeln(it));
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   idPromise(1)
//     .then((it) => document.writeln(it))
//     .then((it) => document.writeln(it));
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   idPromise(1)
//     .then((it) => it)
//     .then((it) => document.writeln(it));
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => {
//     if (n % 2 === 0) return n;
//     else throw Error("not even");
//   };
//
//   idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
//     .catch((err) => {});
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//   const filterEven = (n) => {
//     if (n % 2 === 0) return n;
//     else throw Error("not even");
//   };
//
//   idPromise(1)
//     .then(writer)
//     .then(filterEven)
//     .then(writer)
//     .catch((err) => {});
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   document.writeln(idPromise(1));
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   idPromise(1).then((it) => document.writeln(it));
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   idPromise(1)
//     .then((it) => {
//       document.writeln(it);
//       return it;
//     })
//     .then((it) => document.writeln(it));
// }

// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   idPromise(1)
//     .then(writer)
//     .then((it) => it + 1)
//     .then(writer);
// }
// {
//   document.writeln("(Q23)");
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const filterEven = (n) => (n % 2 === 0 ? n : undefined);
//
//   idPromise(1).then(writer).then(filterEven).then(writer);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const inc = (n) => idPromise(n + 1);
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     while (x < 4) {
//       x = await writer(x);
//       x = await inc(x);
//     }
//   };
//   foo(1);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const inc = (n) => idPromise(n + 1);
//   const filterEven = (n) =>
//     n % 2 === 0 ? idPromise(n) : failPromise("not even");
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     while (x < 4) {
//       x = await filterEven(x);
//       x = await writer(x);
//       x = await inc(x);
//     }
//   };
//   foo(1);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     x = await writer(x);
//   };
//   foo(1);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     x.then(writer);
//   };
//   foo(1);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     document.writeln(x);
//   };
//   foo(1);
// }
// {
//   document.writeln("Q24");
//
//   const idPromise = (x) => new Promise((resolve) => resolve(x));
//   const failPromise = (err) => new Promise((resolve, reject) => reject(err));
//
//   const writer = (x) => {
//     document.writeln(x);
//     return idPromise(x);
//   };
//
//   const foo = async (i) => {
//     let x = await idPromise(i);
//     while (x < 4) {
//       x = await filterEven(x).catch((err) => {});
//       x = await writer(x);
//       x = await inc(x);
//     }
//   };
//   foo(1);
// }
{
  document.writeln("(Q24a)");

  const NullSafe = (x) => {
    const isNullSafe = (y) => y && y.then;
    const maywrap = (y) => NullSafe(y);
    return {
      then: (fn) =>
        x == null
          ? NullSafe(null)
          : maywrap(isNullSafe(x) ? x.then(fn) : fn(x)),
    };
  };

  NullSafe(1).then(console.log);
  NullSafe(null).then(console.log);
  NullSafe(2)
    .then((x) => null)
    .then(console.log);

  // NullSafe(x_)
  // 	.then(x => x*2)
  // 	.then(x => NullSafe(x))
  // 	.then(x => y_ = x +1)
  // 	.then(x => null)
  // 	.then(x => x.mustNotBeCalled) ! == null && y_ === x_ * 2 + 1
  //
}
