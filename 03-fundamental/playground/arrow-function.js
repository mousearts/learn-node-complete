var square = x => {
  var result = x * x;
  return result;
};

var square2 = x => x * x;

/*
    If there are no argument or 2 arguments

    var variable = () => {
        do something;
    }
    var variable = () => do something;


    If only 1 argument

    var variable = arguments => {
        do something;
    }

    var variable = arguments => do something;


*/

// console.log(square(9));

// console.log(square2(10));

var user = {
  name: "David",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },

  // Binding only work with this syntax without arrow function
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHiAlt(1, 2, 3, 4);
