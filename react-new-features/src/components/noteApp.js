import React, {useState, useEffect, useReducer} from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./noteList";
import AddNoteForm from "./addNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, [])
    




    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes"))

        if (notes) {
            dispatch({ type: "POPULATE_NOTES", notes: notes})
            // setNotes(notesData);
        };

    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{notes, dispatch}}>
            <h1>Text notes</h1>
            <NoteList/>
            <AddNoteForm/>
        </NotesContext.Provider>
    )
};

export {NoteApp as default}