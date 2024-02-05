import React from "react";
import './Mid.css';

function Mid() {
    return (
        <div className="Mid">
            <ul>
                <li className="list1">
                    <div className="title">
                        <h2>Title</h2>
                        <input className="inp1" placeholder="enter the title"></input>
                    </div>
                </li>
                <br />
                <li className="list1"> 
                    <div className="description">
                        <h2>Description</h2>
                        <input className="inp2" placeholder="enter the description"></input>
                    </div>
                </li>
            </ul>
        </div>

    );
}


export default Mid;