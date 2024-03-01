import React, { useState } from "react";

const NoteAdder = () => {
  const [getTitles, setGetTitles] = useState("");
  const [getNotes, setGetNotes] = useState("");
  const [myNotes, setMyNotes] = useState([
    {
      title: "Test Title",
      note: "this is my test note",
    },
  ]);

  let newTitle = getTitles;
  let newNote = getNotes;

  const addNotes = () => {
    let notesToAdd = {
      title: newTitle,
      note: newNote,
    };
    setMyNotes([...myNotes, notesToAdd]); //this updates the state by appending the new note to the existing array
    setGetTitles("");
    setGetNotes("");
  };

  const handleChangeTitle = (e) => {
    setGetTitles(e.target.value);
  };

  const handleChangeNote = (e) => {
    setGetNotes(e.target.value);
  };
  return (
    <div className="form flex flex-col w-full">
      <input
        onChange={handleChangeTitle}
        type="text"
        name=""
        id=""
        placeholder="Add a Title"
        className="border border-black "
      />
      <textarea onChange={handleChangeNote} placeholder="Add notes"></textarea>
      <button
        type="submit"
        onClick={addNotes}
        className="bg-blue-600 rounded-md text-white"
      >
        Add Notes
      </button>
      {myNotes.map((myNote, index) => (
        <div className="" key={index}>
          <p>{myNote.title}</p>
          <p>{myNote.note}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteAdder;
