import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Span from "./Span"; 

function IncomeExpense () {

    const {transactions} = useContext(GlobalContext)

    let income=0, expense=0;
    transactions.map(transaction => {
        if(transaction.amount > 0) {
            income += transaction.amount
        }
        else { 
            expense += -1*transaction.amount
        }
    })

    return (
        <div className='inc-exp-div'>
            <Span category='Income' amount={income} id={'income-span'}/>
            <Span category='Expense' amount={expense} id={'exp-span'}/>
        </div>
    )
}

export default IncomeExpense