// console.log("Starting app.js");

const fs = require("fs");
// const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

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

// var filteredArray = _.uniq(["David"]);

// console.log(filteredArray);

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;

// var command = process.argv[2];
var command = argv._[0];

// console.log("Command: ", command);
// console.log("Process: ", process.argv);
// console.log("Yargs: ", argv);

if (command === "add") {
  //   console.log("Adding new note");
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    // console.log("--");
    // ES5
    // console.log("Title: " + note.title);
    // ES 6
    // console.log(`Title: ${note.title}`);
    // console.log(`Body: ${note.body}`);
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  //   console.log("Listing all notes");
  var allNotes = notes.getAll();

  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  //   console.log("Reading note");
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
  // console.log(message);
} else if (command === "remove") {
  //   console.log("Removing note");
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}
