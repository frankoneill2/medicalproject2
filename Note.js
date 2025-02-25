function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <div className="note-header">
        <span className="note-date">{note.date}</span>
        <button 
          className="delete-button" 
          onClick={() => deleteNote(note.id)}
        >
          ×
        </button>
      </div>
      <p className="note-text">{note.text}</p>
    </div>
  );
} 