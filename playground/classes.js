class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting () {
    return `Hi! I'm ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age}`;
  }

  //overwrite default function of object
  toString () {
    return JSON.stringify(this);
  }
}

class Child extends Person {
  constructor (name, age, like) {
    super(name, age); //lấy thằng constructor của thằng cha ra
    this.like = like;
  }
  getGreeting () {
    return `Hey, ${this.name} likes ${this.like}`;
  }
}

class Baby extends Person {
  getGreeting  () {
    return "!!!";
  }
}

var me = new Baby("anh le", 29);
var anony = new Baby('ano', 24);
console.log(me.getGreeting());
console.log(anony.getGreeting());
