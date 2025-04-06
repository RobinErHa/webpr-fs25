{
  document.writeln("(Q14a)");

  Array.prototype.eq = function (other) {
    if (this.length !== other.length) return false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== other[i]) {
        return false;
      }
    }
    return true;
  };

  const xs1_ = [1, 2, 3, 4, 5];
  const xs2_ = [5, 6, 7];
  const xs3_ = ["hallo"];
  const xs4_ = ["a", "b", "c"];

  const ys1_ = [1, 2, 3, 4, 5];
  const ys2_ = [5, 6, 7, 8];
  const ys3_ = ["hallo"];
  const ys4_ = ["a", "b", "c"];

  // document.writeln(xs1_.eq(ys1_));
  // document.writeln(xs2_.eq(ys2_));
  // document.writeln(xs3_.eq(ys3_));
  // document.writeln(xs4_.eq(ys4_));
  document.writeln(
    xs1_.eq(ys1_) && !xs2_.eq(ys2_) && !xs3_.eq(ys4_) && !xs4_.eq(ys3_),
  );
}
{
  document.writeln("(Q15)");
  {
    class Person {
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person();
    p.name = "Dierk";
    document.writeln(p.isCool());
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return name === "Dierk";
      }
    }
    const p = new Person("Dierk");
    document.writeln(p.isCool());
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Joe");
    //p.prototype.isCool = () => true; //undefined -> Person.prototype would be correct
    document.writeln(p.isCool());
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Dierk");
    document.writeln(p.name === "Dierk");
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Dierk");
    const joe = {
      name: "joe",
      cool: p.isCool, //undefined for p
    };
    document.writeln(joe.cool());
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Joe");
    p.isCool = () => true;
    document.writeln(p.isCool());
  }
  {
    class Person {
      // constructor(name) {}
      isCool() {
        return this.name.length > 3; //this.name undefined
      }
    }
    const p = new Person("Dierk");
    // document.writeln(p.isCool());
    document.writeln(false);
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Dierk");
    document.writeln(p.isCool());
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Joe");
    Person.prototype.isCool = () => true;
    document.writeln(p.isCool());
  }
}
{
  document.writeln("Q16");
  {
    class Person {}
    class Student extends Person {}
    const s = new Student();
    document.writeln(s instanceof Person);
  }
  {
    class Person {}
    class Student {}
    const s = new Student();
    Object.setPrototypeOf(Student, Person);
    document.writeln(s instanceof Person);
  }
  {
    class Person {}
    class Student {}
    const s = new Student();
    Object.setPrototypeOf(Student.prototype, Person.prototype);
    document.writeln(s instanceof Person);
  }
  {
    class Person {}
    const p = {};
    Object.setPrototypeOf(p, Person.prototype);
    document.writeln(p instanceof Person);
  }
  {
    class Person {}
    class Student extends Person {}
    const s = new Student();
    document.writeln(s instanceof Student);
  }
  {
    class Person {}
    const p = {};
    Object.setPrototypeOf(p, Person);
    document.writeln(p instanceof Person);
  }
  {
    class Person {}
    class Student {}
    const s = new Student();
    Object.setPrototypeOf(s, Person.prototype); //instances prototype is modified
    document.writeln(s instanceof Student);
  }
  {
    class Person {}
    class Student {}
    const s = new Student();
    Object.setPrototypeOf(s, Student.prototype); //instances prototype is modified
    document.writeln(s instanceof Person);
  }
  {
    class Person {
      constructor(name) {
        this.name = name;
      }
      isCool() {
        return this.name.length > 3;
      }
    }
    const p = new Person("Dierk");
    document.writeln(p instanceof Person);
  }
}
{
  document.writeln("(Q16)");
  const add_ = 1;
  const factor_ = 2;

  const add = function (value) {
    return value + add_;
  };
  const mult = function (value) {
    return value * factor_;
  };

  Function.prototype.then = function (nextFunction) {
    const currentFunction = this;
    return function (value) {
      return nextFunction(currentFunction(value));
    };
  };

  document.writeln(add.then(mult).then(add)(1));
  document.writeln(add.then(mult).then(add)(1) === (1 + add_) * factor_ + add_);
}
