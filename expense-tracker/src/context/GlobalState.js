import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initalState = {
    transactions: []
}

export const GlobalContext = createContext(initalState)

export const GLobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    function deleteTransaction(id)  {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
        })
    }

    return (
        <GlobalContext.Provider value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
} 