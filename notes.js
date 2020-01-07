// console.log("starting notes");
const fs = require("fs");
// var add = (a,b) => { return a+b }
// var sub = (a,b) => { return a-b }
var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var addNote = (title, body) => {
  // var notes = []
  //  notes.push(JSON.parse(fs.readFileSync('notes.txt')))
  // console.log(notes);
  var notes = fetchNotes();
  var note = { title, body };
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));
};
var removeNote = title => {
  var notes = fetchNotes();
  var noteFilter = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(noteFilter));
};
let readNote = title => {
  var notes = fetchNotes();
  var noteFilter = notes.filter(note => note.title === title);
  console.log(`Title: ${noteFilter[0].title} Body: ${noteFilter[0].body}`);
};
let listNotes = () => {
    var notes = fetchNotes();
    console.log(notes);
    
};

let helpNotes = () => {
  // var notes = fetchNotes();
  console.log(" \nif you dont want to use quotes,use - to space between words\n" +
  " list     prints all notes\n" +
  " add    --title 'note title' --body 'content new note'\n" +
  " read   --title 'title to look for the list'\n" +
  " remove --title 'title to remove'\n" +
  " help     prints all commands ");
  
}
module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes, helpNotes
};
