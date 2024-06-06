import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate'

// Pokazuje oraz przelicza Przychód oraz wydatki danego konta
export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(item => item <= 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Przychód</h4>
                <p className='money plus'>+{income} zł</p>
            </div>
            <div>
                <h4>Wydatek</h4>
                <p className='money minus'>{expense} zł</p>
            </div>
        </div>
    )
}
