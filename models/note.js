const fs = require('fs')

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}



const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // If the file doesn't exist, create a new one
            fs.writeFileSync('notes.json', '[]');
            return [];
        } else {
            console.log(error);
            return [];
        }
    }
};


module.exports = { loadNotes, saveNotes }