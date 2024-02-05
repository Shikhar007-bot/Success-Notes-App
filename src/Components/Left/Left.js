import React, { useState } from "react";
import add2 from "../../assets/add2.png";
import './Left.css';

function Left(props) {
    const color = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF"];

    const [listOpen, setListOpen] = useState(false);

    return (
        <div className="Left">
            {/* toggle button to open color palatte */}
            <img src={add2} alt="Add" onClick={() => setListOpen(!listOpen)} />
            <ul className={`Left_bar_list ${listOpen ? "Left_bar_list_active":""}`} >
                {color.map((item, index) => (
                        <li
                            key={index} // unique values should be passed always
                            className="Left_bar_list_item"
                            style={{ backgroundColor: item }}  // this is how style is used without creating a css
                            onClick={()=>props.addNote(item)}
                        />
                    ))}
            </ul>


        </div>
    );
}

export default Left;