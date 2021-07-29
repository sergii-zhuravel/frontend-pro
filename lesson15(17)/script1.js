const person = {
    firstName: "Steve",
    secondName: "Martin"
}

function getFullName(p) {
  return `${p.firstName} ${p.secondName}`;
}

console.log(getFullName(person)); //functional approach


const personObject = {
    firstName: "Steve",
    secondName: "Martin"
}