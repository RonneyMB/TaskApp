import React  from "react";
import './itemS.css'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function ItemTask(props) {
    return (
        <div className="Container">
        <li className={`Item ${props.completed && "item--complete"}`}>
            <span 
            className= "Icon Icon-Check Icon-check--Active"
            onClick={props.onComplete}
            ><FaCheck className="iconS iconSChecked"/></span>
            <p className="Item-p">{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            ><ImCross className="iconS iconSActive" /></span>
        </li>
        </div>
    )

} 
export { ItemTask };