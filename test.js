

// // create a new note object
// let note = function(note, content) {
//     return {
//       title: note,
//       body: content
//     };
//   };
  
//   // return the Notes via  list command
//   const readNotes = data => {
//     for (let i = 0; i < data.length; i++) {
//       console.log(
//         "\n -Note number " +
//           (i + 1) +
//           ":\n   Title: " +
//           data[i].title +
//           "\n   Body: " +
//           data[i].body
//       );
//     }
//   };
//   //readFiltredNote
//   const readFiltredNote = data =>
//     console.log(
//       "\n -Search result :\n   Title: " + data.title + "\n   Body: " + data.body
//     );
  
//   const fs = require("fs");
//   const cliProgress = require("cli-progress");
//   const loadBar = new cliProgress.SingleBar({
//     format: "progress [{bar}] {percentage}% ",
//     barCompleteChar: "#",
//     barIncompleteChar: ".",
//     fps: 1,
//     stream: process.stdout,
//     barsize: 10,
//     position: "center"
//   });
  
//   //start the app with node app.js or node app.js 
//   if (process.argv[2] === undefined) {
//     console.log(" \n app.js starting...\n");
//     loadBar.start(10, 0);
//     loadBar.increment(2);
  
//     //fake loading
//     setTimeout(() => {
//       console.log(
//         "\n Welcome to the note app with Node.js \n list of commands:\n" +
//           " --list     prints all notes\n" +
//           " --add    --title  'note title'  --body  'content new note'\n" +
//           " --read   --title  'title to find'\n" +
//           " --remove --title  'title to delete'\n" +
//           " --help     prints all commands "
//       );
//     }, 2000);
  
//     for (let i = 0; i <= 10; i += 1) {
//       loadBar.update(i);
//     }
  
//     loadBar.stop();
//   }
  
//   // --list command to print the notes
//   else if (process.argv[2] === "--list" && process.argv.length === 3) {
//     console.log("Printing...");
//   //fake loading
//     setTimeout(
//       () =>
//         fs.readFile("./notes.json", function read(err, data) {
//           if (err) return console.log(err);
//           console.log("\n Printing " + JSON.parse(data).length + " note(s):\n");
//           readNotes(JSON.parse(data));
//         }),
//       1000
//     );
//   }
//   //--add command to add a note
//   else if (
//     process.argv[2] === "--add" &&
//     process.argv[3] === "--title" &&
//     process.argv[5] === "--body" &&
//     process.argv[4] !== "" &&
//     process.argv[6] !== "" &&
//     process.argv.length === 7
//   ) {
//     fs.readFile("./notes.json", function read(err, data) {
//       if (err) return console.log(err);
  
//       console.log(
//         "New note added with success!\n" +
//           "Type --list    check you notes" +
//           "\nType --help    check the commands"
//       );
  
//       //create a copy of the data with the new note
//       let newData = [
//         ...JSON.parse(data),
//         new note(process.argv[4], process.argv[6])
//       ];
//       //return the new data to the file 
//       fs.writeFile("./notes.json", JSON.stringify(newData), function(err) {
//         if (err) return console.log(err);
//       });
//     });
//   }
//   //remove a note by title
//   else if (process.argv[2] === "--remove" && process.argv[3] === "--title") {
//     fs.readFile("./notes.json", function read(err, data) {
//       if (err) return console.log(err);
//       let newData = JSON.parse(data).filter(
//         note => note.title !== process.argv[4]
//       );
//       //if the note dosent exist 
//       newData.length === JSON.parse(data).length
//         ? console.log(
//             "\n ERROR!:\n  The note you want to delete dosen't exist\n  --list    to check out the notes"
//           )
//         : fs.writeFile("./notes.json", JSON.stringify(newData), function(err) {
//             if (err) return console.log(err);
//             console.log(
//               "The note " + "**" + process.argv[4] + "**" + " has been removed !"
//             );
//           });
//     });
//   }
//   //read note by title
//   else if (process.argv[2] === "--read" && process.argv[3] === "--title") {
//     fs.readFile("./notes.json", function read(err, data) {
//       if (err) return console.log(err);
  
//       // find the note to read 
//       let dataToRead = JSON.parse(data).filter(
//         notes => notes.title === process.argv[4]
//       )[0];
//        // if the user type a invalid note to read
//       dataToRead !== undefined
//         ? readFiltredNote(dataToRead)
//         : console.log(
//             "\n ERROR!: \n The note you requested doesn't exists or has been removed"
//           );
//     });
  
//   } 
//   // --help command 
//   else if (process.argv[2] === "--help") {
//     console.log(
//       " \nif you dont want to use quotes,use - to space between words\n" +
//         " --list     prints all notes\n" +
//         " --add    --title 'note title' --body 'content new note'\n" +
//         " --read   --title 'title to find'\n" +
//         " --remove --title 'title to delete'\n" +
//         " --help     prints all commands "
//     );
//   } 
//   //handel errors 
//   else {
//     console.log("\n ERROR!!!:\n Type --help to see the list off commands");
//   }