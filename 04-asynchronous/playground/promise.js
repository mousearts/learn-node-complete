var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

// asyncAdd(5, 7)
//   .then(
//     res => {
//       console.log("Result: ", res);
//       return asyncAdd(res, 33);
//     },
//     errorMessage => {
//       console.log(errorMessage);
//     }
//   )
//   .then(
//     res => {
//       console.log("Should be ", res);
//     },
//     errorMessage => {
//       console.log(errorMessage);
//     }
//   );

asyncAdd(5, 7)
  .then(res => {
    console.log("Result: ", res);
    return asyncAdd(res, 33);
  })
  .then(res => {
    console.log("Should be ", res);
  })
  // Catch means when it fails
  .catch(errorMessage => {
    console.log(errorMessage);
  });

/*
    Promise means when function are resolved, will executed then function.
    Resolve means that promise has been fulfill
    Reject means that promise can't be fulfill
*/

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey. It worked!");
//     // reject("Unable to fulfill promise");
//   }, 2500);
// });

// // When the promise resolve will execute
// somePromise.then(
//   message => {
//     console.log("Success", message);
//   },
//   errorMessage => {
//     console.log("Error: ", errorMessage);
//   }
// );
