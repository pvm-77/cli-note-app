
#  📝💻 CLI Note App

## 📜 Description

This is a command-line interface (CLI) note-taking application built with Node.js. It allows users to create, read, update, and delete notes from the terminal.

## 🚀 Features
- Add a note with a title and body using the add command 📌✍️

- Remove a note with a specific title using the remove command 🗑️❌

- List all notes using the list command 📜👀

- Read a specific note using the read command 📖🔍

- Update the title and/or body of a note using the update command 📝✏️


## 🔧 Installation
To install the necessary dependencies, run the following command:
```bash
npm install
```

## 🔨 Usage
To add a new note, run the following command:

```bash
node index.js add --title="Note Title" --body="Note Body"
```
To remove a note, run the following command:

```bash
node index.js remove --title="Note Title"
```
To list all notes, run the following command:
```bash
node index.js list
```
To read a specific note, run the following command:

```bash
node index.js read --title="Note Title"
```
To update a note, run the following command:
```bash
node index.js update --title="Note Title" --newTitle="updated title" --newBody="updated body"
```