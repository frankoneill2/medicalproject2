function NoteList({ notes, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="no-notes">No notes yet. Add one above!</p>
      ) : (
        notes.map(note => (
          <Note 
            key={note.id} 
            note={note} 
            deleteNote={deleteNote} 
          />
        ))
      )}
    </div>
  );
} 