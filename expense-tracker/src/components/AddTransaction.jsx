import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4} from "uuid"

function AddTransaction( ) {
    const [newTransaction, setNewTransaction] = useState({text: '', amount:''});
    const { addTransaction } = useContext(GlobalContext)

    function handleChange(event) {
        const {name,value} = event.target;

        setNewTransaction(prevValue => {
            return({...prevValue, [name]:value})
        })
    }

    const onClick = event => {
        event.preventDefault()

        const transaction = {
            id: uuidv4(),
            text: newTransaction.text,
            amount: +newTransaction.amount
        }
        addTransaction(transaction)

        setNewTransaction({text: '', amount:''})
    }

    return (
        <div className="new-transaction">
        <h2>Add New Transaction</h2>
        <form>
            <p>Text</p>
            <input placeholder="Enter Text..." onChange={handleChange} value={newTransaction.text} name="text"></input>
            <p>Amount<br/>(negative - expense, positive - income)</p>
            <input placeholder="Enter Amount..." onChange={handleChange} value={newTransaction.amount} name="amount"></input>
            <button type="submit" onClick={onClick}>Add Transaction</button>
        </form>
        </div>
    )   
}

export default AddTransaction