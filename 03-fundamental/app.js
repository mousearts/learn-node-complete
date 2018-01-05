console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");

/*
  Using relative path to tell node.js where exactly the file are.

  ('./')
*/
const notes = require("./notes");

// var user = os.userInfo();
// console.log(user);

/*
    Will get warning because asynchronous need callback
*/
// fs.appendFile("greetings.txt", "Hello World");

// If running with V7 ++

// Option 1
// fs.appendFile("greetings.txt", "Hello " + user.username + "!", function(err) {
//   if (err) {
//     console.log("Unable to write file");
//   }
// });

// Option 2
// fs.appendFileSync("greetings.txt", "Hello World!");

/*
    Using ES6 template variable
*/

// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log("Unable to write file");
//   }
// });

// var res = notes.addNote();
// console.log(res);

// console.log("Result:", notes.add(9, -2));

// console.log(_.isString(true));
// console.log(_.isString("David"));

var filteredArray = _.uniq(["David"]);

console.log(filteredArray);