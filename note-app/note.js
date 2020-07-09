const fs = require("fs");
const path = require("path");
const chalk = require('chalk')

const getNotes = () => {
  /*
  fs.readFile(path.join(__dirname, "/notes.json"), (err, data) => {
    if (err) throw err;
    console.log(chalk.black.bgGreen(' ------ Lists of notes ------ '))
    JSON.parse(data).map((item,index) => {
     
      console.log(index, item.title);
    });
  });
  */

  const notes = loadNotes()
  console.log(chalk.black.bgGreen(' ------ Lists of notes ------ '))
  notes.forEach((note,index)=>console.log(index, note.title))
};

const readNote = (title) => {
  /*
  fs.readFile(path.join(__dirname, "/notes.json"), (err, data) => {
    if (err) throw err;

    JSON.parse(data).filter((item) => {
      if (item.title === title) {
        console.log(chalk.black.bgGreen(item.title))
        console.log(item.body);
      }
    });
  });
  */
  const notes = loadNotes();
  const note = notes.find(note=>note.title==title);
  if(note){
    console.log(chalk.black.bgGreen(note.title))
    console.log(note.body);
  } else{
    console.log(chalk.black.bgRed("Note is not found."));
  }
  
  
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    console.log(chalk.black.bgGreen(' Note added! '))
    saveNotes(notes);
  } else {
    console.log(chalk.black.bgRed("Note title taken."));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.find(note => note.title !== title);
  if(notes.length === notesToKeep.length){
    console.log(chalk.black.bgRed(' No note found! '))
  } else{
    console.log(chalk.black.bgGreen(' Note removed! '))
    saveNotes(notesToKeep);
  }
 
};

const saveNotes = (notes) => {
  fs.writeFile(
    path.join(__dirname, "/notes.json"),
    JSON.stringify(notes),
    (err) => {
      if (err) throw err;
     
    }
  );
};
const loadNotes = () => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/notes.json")).toString()
    );
    return data;
  } catch {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  readNote,
  removeNote,
};
