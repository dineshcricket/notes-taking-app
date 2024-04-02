let notes = [];

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        notes.push(noteText);
        noteInput.value = '';
        displayNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(noteElement);
    });
}

// Display existing notes on page load
displayNotes();