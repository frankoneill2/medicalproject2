function NoteForm({ addNote }) {
  const [text, setText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText('');
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to add a note..."
          rows="4"
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
} 