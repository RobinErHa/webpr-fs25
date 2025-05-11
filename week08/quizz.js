{
  document.writeln("Q17");
  function Todo(text) {
    let done = false;
    const check = () => (done = true);
    return {
      getText: () => text,
      isDone: () => done,
      check: check,
    };
  }
  let todo = Todo("buy milk");
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text, done) {
    const check = () => (done = true);
    return {
      getText: () => text,
      isDone: () => done,
      check: check,
    };
  }
  let todo = Todo("buy milk", false);
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text, done) {
    function check() {
      done = true;
    }
    return {
      getText: () => text,
      isDone: () => done,
      check: check,
    };
  }
  let todo = Todo("buy milk", false);
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text) {
    let done = false;
    const check = () => (done = true);
    return {
      getText: () => text,
      isDone: () => done,
      check: check,
    };
  }
  let todo = new Todo("buy milk");
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text) {
    let done = false;
    return {
      getText: () => text,
      isDone: () => done,
      check: (done) => true,
    };
  }
  let todo = Todo("buy milk");
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text) {
    let done = false;
    return {
      getText: () => text,
      isDone: () => done,
      check: () => (done = true),
    };
  }
  let todo = Todo("buy milk");
  todo.check();
  document.writeln(todo.isDone());
}
{
  function Todo(text) {
    const done = false;
    return {
      getText: () => text,
      isDone: () => done,
      // check: () => (done = true),
    };
  }
  let todo = Todo("buy milk");
  // todo.check();
  document.writeln(false);
}
{
  function Todo(text) {
    let done = false;
    const check = () => (this.done = true);
    return {
      getText: () => text,
      isDone: () => done,
      check: check,
    };
  }
  let todo = Todo("buy milk");
  todo.check();
  document.writeln(todo.isDone());
}

{
  document.writeln("Q18 Callbacks");
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  let it = [];
  document.writeln(handle(() => it.push(1)).length === 1);
}
{
  function handle(callback) {
    const result = [];
    callback([]);
    return result;
  }
  document.writeln(handle((it) => it.push(1)).length === 1);
}
{
  function handle(callback) {
    const result = [];
    callback([]);
    return result;
  }
  // document.writeln(handle(it.push(1).length === 1));
  document.writeln(false);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  document.writeln(handle(() => [1]).length === 1);
}
{
  function handle(callback) {
    const result = [];
    return callback(result);
  }
  document.writeln(handle(() => [1]).length === 1);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  // let it = [];
  // document.writeln(handle(it.push(1)).length === 1);
  document.writeln(false);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  // document.writeln(handle(() => it.push(1)).length === 1);
  document.writeln(false);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  document.writeln(handle((it) => it.push(1)).length === 1);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    return result;
  }
  // let it = [];
  document.writeln(handle((it) => it.push(1)).length === 1);
}
{
  function handle(count, callback) {
    const result = [];
    for (let i = 0; i < count; i++) {
      callback(result);
    }
    return result;
  }
  document.writeln(handle(3, (it) => it.push(1)).length === 3);
}
{
  function handle(callback) {
    const result = [];
    callback(result);
    callback(result);
    return result;
  }
  document.writeln(handle((it) => it.push(1)).length === 2);
}
{
  function handle(callback) {
    return callback([]);
  }
  document.writeln(
    handle((it) => {
      it.push(1);
      return it;
    }).length === 1,
  );
}

{
  document.writeln("(Q18a = Failsafe callback)");

  const failSafe = (x) => (callback) => (y) => {
    try {
      return callback(y);
    } catch (Error) {
      return x;
    }
  };

  const doError = (x) => {
    throw new Error();
  };
  const errorCount = failSafe(1)(doError);

  document.writeln(
    failSafe(false)((x) => x)(true) &&
      failSafe(true)(doError)(null) &&
      errorCount(null) === 1,
  );
}
