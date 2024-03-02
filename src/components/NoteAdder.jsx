import React, { useEffect, useState } from "react";

const NoteAdder = () => {
  const [getTitles, setGetTitles] = useState("");
  const [getNotes, setGetNotes] = useState("");
  const [myNotes, setMyNotes] = useState([]);

  // Load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("localNotes"));
    if (storedNotes) {
      setMyNotes(storedNotes);
    };
  }, []);

  // Save notes to local storage whenever myNotes changes
  useEffect(() => {
    localStorage.setItem("localNotes", JSON.stringify(myNotes));
  }, [myNotes]);

  const addNotes = () => {
    // Create a new note object using the state variables directly
    const notesToAdd = {
      title: getTitles,
      note: getNotes,
    };
    console.log(notesToAdd)
    // Update the state by appending the new note to the existing array
    setMyNotes([...myNotes, notesToAdd]);
    // Clear the input fields and state variables
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
        value={getTitles} 
        placeholder="Add a Title"
        className="border border-black"
      />
      <textarea
        onChange={handleChangeNote}
        value={getNotes} 
        placeholder="Add notes"
        className="border border-black"
      ></textarea>
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
