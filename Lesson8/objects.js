function printNameUpperCase(person) {
    person.name = person.name.toUpperCase();
    console.log(person.name);
}

const nick = {name: 'Nick', age: 25}
printNameUpperCase(nick)

const person = {
  name: "Alina", 
  age: 24,
  address: {
      city: "Kyiv", street: 'Deribasovskaya', house: 5
  }
}

const obj = {};
obj['name'] = person.name;
obj['age'] = person['age'];

// const objectKeys = Object.keys(person);

// for(let i = 0; i < objectKeys.length; i++) {
//     obj[objectKeys[i]] = person[objectKeys[i]];
// } 

// objectKeys.forEach(key => obj[key] = person[key]);

// for (let key in person){
//     obj[key] = person[key]
// }