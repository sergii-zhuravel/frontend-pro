### Welcome!

### HW review and improvements (questions)

### Promises

### POST/PUT/PATCH

### async/await

### Same Origin Policy

### Cross Origin Resource Sharing


let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 1000);

  setTimeout(() => reject(new Error("ignored")), 2000);

});

promise
  .then(
    result => alert("Fulfilled: " + result),
    error => alert("Rejected: " + error)
  );