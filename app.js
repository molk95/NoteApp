// console.log("starting app.js");

// const fs = require('fs')
const yargs = require("yargs");
const note = require("./notes");
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

//  console.log(process.argv);

if (command === "add") {
  console.log("note added");
  note.addNote(title, body);
} else if (command === "remove") {
  console.log("note removed");
  note.removeNote(title);
} else if (command === "read") {
  console.log("note read");
  note.readNote(title);
} else if (command === "help") {
  console.log(
    " \nif you dont want to use quotes,use - to space between words\n" +
      " list     prints all notes\n" +
      " add    --title 'note title' --body 'content new note'\n" +
      " read   --title 'title to look for the list'\n" +
      " remove --title 'title to remove'\n" +
      " help     prints all commands "
  );
  // note.listNotes();
} else if (command === "list") {
  console.log("notes listed");
  note.listNotes();
} else {
  console.log("Error!!");
}

// switch (command) {
//   case command === "add":
//     console.log("note added");
//     note.addNote(title, body);

//     break;
//   case command === "remove":
//     console.log("note removed");
//     note.removeNote(title);
//     break;
//   case command === "read":
//     console.log("note read");
//     note.readNote(title);
//     break;
//   case command === "help":
//     console.log(
//       " \nif you dont want to use quotes,use - to space between words\n" +
//         " list     prints all notes\n" +
//         " add    --title 'note title' --body 'content new note'\n" +
//         " read   --title 'title to look for the list'\n" +
//         " remove --title 'title to remove'\n" +
//         " help     prints all commands "
//     );

//     break;
//   case command === "list":
//     note.listNotes();
//     break;
//   default:
//     console.log("Error!!");
//   // code block
// }
