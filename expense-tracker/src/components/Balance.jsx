import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
    const {transactions} = useContext(GlobalContext)

    let balance = 0;
    transactions.map(transaction => {
        balance += transaction.amount
    })

    return (
        <div className='balance-div'>
            <h2>Your balance</h2>
            <h1>{'\u20b9'} {balance}</h1>
        </div>
    )
}

export default Balance