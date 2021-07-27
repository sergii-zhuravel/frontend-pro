### Welcome!

### HW review and improvements (questions)

### Lexical scoping

### Global scope

### 

### Add events via element prop

### Add events via addEventListener

### Prevent default for links

### Create HTML Element



Lexical scoping

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

------------------
let a = 'global';
function outer() {
    let b = 'outer';
function inner() {
      let c = 'inner'
      console.log(c);   // выдаст 'inner'
      console.log(b);   // выдаст 'outer'
      console.log(a);   // выдаст 'global'
    }
    console.log(a);     // выдаст 'global'
    console.log(b);     // выдаст 'outer'
    inner();
  }
outer();
console.log(a);         // выдаст 'global'

------------------------

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

------------------
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.




The module pattern
---------------------

const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; // This variable is private
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined, this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
secondAccount.withdraw(30); // "Insufficient money"
secondAccount.withdraw(20);  // 0