const chalk = require('chalk').default;
const fs = require('fs');

const jsonParser = jsonFile => JSON.parse(fs.readFileSync(jsonFile).toString());

const jsonWriter = (fileName, jsObject) => fs.writeFileSync(fileName, JSON.stringify(jsObject));

const saveNotes = notes => jsonWriter('notes.json', notes);

const loadNotes = () => {
    try {
        return jsonParser('notes.json');
    } catch (err) {
        return [];
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title); //array.find() will return the first match and stop
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('Notes added.'));
    } else {
        console.log(chalk.redBright('Duplicated title!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    /* Array.filter(): An Array containing all the array elements that pass the test. 
    If no elements pass the test it returns an empty array. */
    const trimmeddNotes = notes.filter(note => note.title !== title);
    if (trimmeddNotes.length === notes.length) {
        console.log(chalk.redBright('Title not found!'));
    } else {
        saveNotes(trimmeddNotes);
        console.log(chalk.green('Note \'' + title + '\' removed!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'));
    notes.forEach(note => console.log(chalk.green(note.title)));
};

const readNote = title => {
    const notes = loadNotes();
    const matchNote = notes.find(note => note.title === title);
    if (matchNote) {
        console.log(chalk.blueBright.inverse('Search result:'));
        console.log(chalk.green(`Title: ${title}`));
        console.log(`Note: ${matchNote.body}`);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};