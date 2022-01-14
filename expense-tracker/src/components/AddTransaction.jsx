import React, { useState } from "react";

function AddTransaction(props) {

    const [newTransaction, setNewTransaction] = useState({text: '', amount:''});

    function handleChange(event) {
        const {name,value} = event.target;

        setNewTransaction(prevValue => {
            return({...prevValue, [name]:value})
        })
    }

    function submitTransaction (event) {
        props.onAdd(newTransaction)
        setNewTransaction ({
            text : '',
            amount: ''
        })

        event.preventDefault()
    }

    return (
        <form>
            <p>Text</p>
            <input placeholder="Enter Text..." onChange={handleChange} value={newTransaction.text} name="text"></input>
            <p>Amount<br/>(negative - expense, positive - income)</p>
            <input placeholder="Enter Amount..." onChange={handleChange} value={newTransaction.amount} name="amount"></input>
            <button type="submit" onClick={submitTransaction}>Add Transaction</button>
        </form>
    )   
}

export default AddTransaction