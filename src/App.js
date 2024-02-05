import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Notecontainer from './Components/NoteContainer/Notecontainer';
import './App.css';
import Left from './Components/Left/Left';

function App() {

    const [notes, setNotes] = useState(
          JSON.parse(localStorage.getItem('notes-app')) || []
      );


    const addNote=(color)=>{
        const tempNotes = [...notes];

        tempNotes.push({
          // id is used to make the note unique otherwise 
          // it copy all the text of 
          // previous notes to new notes
          id: Date.now() + "" + Math.floor(Math.random()*78),
          text: "",
          time: Date.now(),
          color,
        });
        setNotes(tempNotes);
    };

    const deleteNote=(id)=>{
      // dummy so that no change happen in original content
      const tempNotes = [...notes];
      
      // index:- which note is to be deleted
      const index = tempNotes.findIndex(item=>item.id===id)
      console.log(id,index);
      // if no notes present
      if(index<0) return

      // delete the desired note
      tempNotes.splice(index, 1) // index and the delete count

      // update original notes with temporary notes
      setNotes(tempNotes);

    };

    const updateText = (text, id) => {
      const tempNotes = [...notes];
    
      const index = tempNotes.findIndex(item=>item.id===id)
      // if no notes present
      if(index<0) return

      tempNotes[index].text = text;
      setNotes(tempNotes);

    };



  //  🌟🌟🌟
    // note: whenever site is refreshed the notes are vanished 
    //    so lets store them in local storage
    // stringfy use when store something in local storage otherwise we
    //  cant take that back the way it was earlier

    useEffect(()=>{
        localStorage.setItem('notes-app',JSON.stringify(notes))
    },[notes])


  return (
    <div className="App">
      {/* <h1>Notes</h1> */}
       <Left addNote={addNote}/>
      <Notecontainer 
          notes = {notes} 
          deleteNote={deleteNote}
          updateText={updateText}    
      />
     
    </div>  
    





  );
}

export default App;
