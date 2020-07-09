
//const validator = require('validator')
//const chalk = require('chalk')

const fs = require('fs')
const path = require('path')
const yargs = require('yargs')
const notes = require('./note.js');


//ADDING NOTE
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){   
       notes.addNote(argv.title, argv.body);        
    }
});


//REMOVING NOTE
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){      
        notes.removeNote(argv.title)
    }
});


//LIST NOTE
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
  

    handler(){
        console.log('Listing all the notes');
        notes.getNotes();
    }
});


//READ NOTE
yargs.command({
    command: 'read', 
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Title of the note', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){

      
        notes.readNote(argv.title)
    }
});

yargs.parse();