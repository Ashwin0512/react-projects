import React from "react";

function Span (props) {
    return(
        <div className="inc-exp-span" id={props.id}>
            <h2>{props.category}</h2>
            <p>{'\u20B9 '+props.amount}</p>
        </div>
    )
}

export default Span