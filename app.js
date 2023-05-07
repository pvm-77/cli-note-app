const yargs = require('yargs');
const noteController = require('./controllers/notes');
const logger=require('./utils/logger');

// create note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'note body',
            demanOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        noteController.addNote(argv.title, argv.body);
    },


})
// read a note
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function (argv) {
        noteController.readNotes(argv.title)
    }
})
// read all notes

yargs.command({
    command: 'list',
    describe: 'list all notes',

    handler: function () {
        noteController.getNotes();

    }

})

// delete command
yargs.command({
    command: 'delete',
    describe: 'delete a note',
    handler: function (argv) {
        noteController.deleteNote(argv.title)
    }
})


yargs.parse();
