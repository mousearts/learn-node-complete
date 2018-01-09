// var obj = {
//   name: "David"
// };

// // Change Object to String
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "David", "Age" : 26}';

// // Change JSON to Object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

/*

JSON.stringify = Change object to string
JSON.parse = Change string to object

*/

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body"
};

// originalNote String
// Convert to string
var originalNoteString = JSON.stringify(originalNote);

// Save the notes
fs.writeFileSync("notes.json", originalNoteString);

// Read the file
var noteString = fs.readFileSync("notes.json");

// note
// Convert the string back to object
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);
