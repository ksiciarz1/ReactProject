import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalSate';

// Wyświetla aktualny stan finansowy konta
export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
 
    return (
        <div>
            <h4>Stan konta</h4>
            <h3>{total} zł</h3>
        </div>
    )
}
