import React from "react";

function ListItem (props)    {

    const positive = true;


    return(
        <div className="list-item-div">
            <li className="list-item" style={{borderRight: props.amount>0 ? "6px solid rgb(101, 201, 123)" : "6px solid rgb(177,68,53)"}}>
                <span>{props.item}</span>
                <span>{props.amount>0 && "+" }{props.amount}</span>
                <button 
                    className="remove-btn" 
                    onClick={() => props.onRemove(props.id)}>X
                </button>
            </li>
            
        </div>
    )
}

export default ListItem