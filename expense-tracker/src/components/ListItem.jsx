import React from "react";

function ListItem (props)    {

    const positive = true;


    return(
        <>
        <li className="list-item" style={{borderRight: props.amount>0 ? "6px solid rgb(101, 201, 123)" : "6px solid rgb(177,68,53)"}}>
            <span>{props.item}</span>
            <span>{props.amount>0 && "+" }{props.amount}</span>
        </li>
        </>
    )
}

export default ListItem