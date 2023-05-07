const noteModel = require('../models/note');
const logger = require('../utils/logger')
// create a new note
const addNote = function (title, body) {
    const notes = noteModel.loadNotes();

    const duplicateNote = notes.filter(note => note.title === title);
    if (duplicateNote.length !== 0) {
        logger.info('title taken');

    } else {
        notes.push({ title, body });
        noteModel.saveNotes(notes);
        logger.info('new note added');
    }

}

// read a note
const readNotes = (title) => {
    const notes = noteModel.loadNotes();
    // find the note which matches our given title
    const note = notes.find(note => note.title === title);
    if (note) {
        logger.info(note.body);

    } else {
        logger.info(`note  not exist!`);
    }






}
const updateNote = (title) => {

}
const getNotes = function () {
    const notes = noteModel.loadNotes()
    //  check whether array is empty or not
    if (!(typeof notes !== 'undefined' && notes.length === 0)) {
        logger.info('your Notes as follows')

        notes.forEach(note => {
            logger.info(note.title)

        })
    } else {

        logger.info('you dont have notes as of now');

    }
    ;
}

// delete a note
const deleteNote = (title) => {
    // first get all notes
    const notes = noteModel.loadNotes();
    const noteToRemove = notes.filter(note => note.title === title);
    if (noteToRemove.length !== 0) {
        // perform removal from array
        notes.splice(noteToRemove, 1);
        saveNotes(notes)
        console.log(`${title} removed`);
    } else {
        console.log('title not exist');
    }

}

module.exports = { addNote, getNotes, readNotes, deleteNote }
