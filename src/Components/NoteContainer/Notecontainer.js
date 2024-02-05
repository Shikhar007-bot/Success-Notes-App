import React from 'react'
import Notes from '../Notes/Notes';
import './NoteCont.css';


function Notecontainer(props) {

    const rev = (arr)=>{
        const array=[]
        for(let i=arr.length-1; i>=0; i--){
            array.push(arr[i]);
        }
        return array;
    };


    const notes = rev(props.notes);
    return (
        <div className='note-container'>
            <h1>Success Notes</h1>
            <div className='note-container-notes custom-scroll'>
                {/* when use map index which is unique is necessary */}
                {
                    notes.map((item)=>
                        (
                            <Notes 
                                key={item.id} 
                                note={item}
                                deleteNote={props.deleteNote}
                                updateText = {props.updateText}
                            />
                        )
                    )

                    
                }
            </div>
        </div>
    );
}

export default Notecontainer;


