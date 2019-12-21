import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const NoteApp = () => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    const [notes, setNotes] = useState(notesData || []);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle("")
        setBody("")
    };

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    })

    return (
        <div>
            <h1>Text notes</h1>
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>X</button>
                </div>
            ))}
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button >add note</button>
            </form>
        </div>
    )
};


const AppE = (props) => {

    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(""); 

    useEffect(() => {
        console.log("useEffect ran");
        document.title = count;
    })
    
    return (
        <div>
            <p>The current {text || "count"} is {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
};

App.defaultProps = {
    count: 0
}


ReactDOM.render(<NoteApp count={2} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
