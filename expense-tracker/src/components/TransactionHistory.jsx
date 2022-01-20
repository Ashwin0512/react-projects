import React, { useContext, useEffect } from "react";
import ListItem from "./ListItem";
import { GlobalContext } from "../context/GlobalState";

const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <div className='history'>
            <h2>History</h2>
            <ul>
            {transactions.map((transaction,index) => (
                <ListItem item={transaction.text} amount={transaction.amount} key={transaction.id} id={transaction.id}/>
            ))}
            </ul>
        </div>
    )
}

export default TransactionHistory