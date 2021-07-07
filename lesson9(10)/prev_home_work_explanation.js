const person = {
    name: "Alina", 
    age: 24,
    address: {
        city: "Kyiv", street: 'Deribasovskaya', house: 5
    }
  }

  
  function deepCloneObject(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            newObj[key] = deepCloneObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
  }

  const person2 = deepCloneObject(person);
  person2.address.city = "Lviv";