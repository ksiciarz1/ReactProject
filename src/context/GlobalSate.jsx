import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        // Przykładowe tranzakcje do testów
        // { id: 1, text: 'Kwiaty', amount: -20 },
        // { id: 2, text: 'Wypłata', amount: 400 },
        // { id: 3, text: 'Księgarnia', amount: -10 },
        // { id: 4, text: 'Fotograf', amount: 150 },
        // { id: 5, text: 'Klawiatura', amount: -400 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransation(id) {
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
            deleteTransation,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>)
}