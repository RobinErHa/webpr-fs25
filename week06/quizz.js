{
  document.writeln("(q13a)");
  const Empty = (() => {
    function Empty() {}
    return Empty;
  })();
  const empty = Empty;
  document.writeln(empty instanceof Empty);
}
{
  document.writeln("(q13b)");
  function Empty() {}
  const empty = new Empty();
  Empty.prototype.answer = 42;
  document.writeln(empty.answer === 42);
}
{
  document.writeln("(q13c)");
  const Empty = (() => {
    function Empty() {}
    return Empty;
  })();
  const empty = new Empty();
  document.writeln(empty instanceof Empty);
}
{
  document.writeln("(q13d)");
  function Empty() {}
  const empty = new Empty();
  Empty.prototype.answer = 42;
  document.writeln(empty.answer === 42);
}
{
  document.writeln("(q14a)");
  const Person = (name) => {
    let age = 0;
    return {
      getAge: () => age,
      setAge: (newAge) => (age = newAge),
      getName: () => name,
      setName: (newName) => (name = newName),
    };
  };
  const me = Person("Myself");
  me.name = "***";
  document.writeln(me.getName());
  document.writeln(me.getName() === "***");
}
{
  document.writeln("(q14b)");
  const Person = (name) => {
    let age = 0;
    return {
      getAge: () => age,
      setAge: (newAge) => (age = newAge),
      getName: () => name,
      setName: (newName) => (name = newName),
    };
  };
  const me = Person("Myself");
  me.setName("Sherlock");
  document.writeln(me.getName());
  document.writeln(me.getName() === "Sherlock");
}
{
  document.writeln("(q14c)");
  const Person = (name) => {
    let age = 0;
    return {
      getAge: () => age,
      setAge: (newAge) => (age = newAge),
      getName: () => name,
      setName: (newName) => (name = newName),
    };
  };
  const me = Person("Myself");
  me.setAge(50);
  document.writeln(me.getAge());
  document.writeln(me.getAge() === 50);
}
