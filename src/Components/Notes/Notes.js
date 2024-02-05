import React from "react";
import delnew from "../../assets/delnew.png"
import './Notes.css'


let timer = 500,timeout



function Notes(props) {

    // convert milliseconds to proper date format
    const formatDate = (value) => {
        if (!value) return ""

        const date = new Date(value)

        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

        let hrs = date.getHours()
        let ampm = hrs > 12 ? "PM" : "AM"
        hrs = hrs ? hrs : "12"
        hrs = hrs > 12 ? hrs = 24 - hrs : hrs

        let min = date.getMinutes()
        min = min < 10 ? "0" + min : min

        let day = date.getDate()

        const month = months[date.getMonth()]

        return `${hrs}:${min} ${ampm} ${day} ${month}`

    };

    const debounce=(func)=>{
        clearTimeout(timeout)
        timeout=setTimeout(func, timer);
    }

    const updateText = (text, id)=>{
        debounce(()=>props.updateText(text, id));
    }

    return (
        <div className="note" style={{ backgroundColor: props.note.color }}>
            <textarea className="notes-text"
                defaultValue={props.note.text}
                onChange={(event)=>{
                    updateText(event.target.value , props.note.id)
                }}
            />
            <div className="note_del">
                <p>{formatDate(props.note.time)}</p>
                <img
                    src={delnew}
                    alt="delete"
                    onClick={() =>
                        props.deleteNote(props.note.id)
                    }
                />
            </div>

        </div>
    );
}
export default Notes;

// style={{backgroundColor: props.Notes.color}}>
//             <textarea className="notes_text" defaultValue={props.Notes.text}></textarea>
//             <p>{props.Notes.time}</p>