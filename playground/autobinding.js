var obj = {
  name: 'anhle',
  printName: function () {
    console.log(`name is ${this.name}`);
  }
};

obj.printName();
setTimeout(obj.printName, 1000); //name is undefinde
setTimeout(obj.printName.bind(obj), 1000); //name is anhle
