import React, {useContext} from "react";
import Notes from "./note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
    const { notes } = useContext(NotesContext)
    
    return notes.map((note) => (
        <Notes key={note.title} note={note} />
    ))
}

export { NoteList as default};