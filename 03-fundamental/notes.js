// console.log("Starting notes.js");

const fs = require("fs");

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

// ES 6
var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

// Used variable
var addNote = (title, body) => {
  //   console.log("Adding note", title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //Try catch method when checking where there will be error

  // ES6
  var duplicateNotes = notes.filter(note => note.title === title);

  // //Simmilar to
  //   var duplicateNotes = notes.filter(note => {
  //     note.title === title;
  //   });

  // If there are duplicates notes
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  // console.log("Getting all notes");
  // Fetch the notes
  // Filter

  return fetchNotes();
  // debugger;
};

var getNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

var removeNote = title => {
  //   console.log("Removing note", title);
  // Fetch Notes
  var notes = fetchNotes();

  // Filter the notes, removing the one with title of argument
  /*
  Translates as creates new array but doesn't include title. If available will be filtered.
  */
  var filteredNotes = notes.filter(note => note.title !== title);

  // Save notes
  saveNotes(filteredNotes);

  // Save new notes array

  return notes.length !== filteredNotes.length;
};

var logNote = note => {
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  // ES 6
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote

  // Normal
  // addNote: addNote
};

// module.exports.add = (a, b) => {
//     return a + b;
// }

// The goal are to exports function.
/*
    Regular ES5 Function

    function(){

    }

    ES6 Function

    ( ) => {

    }
*/

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note'
// };
