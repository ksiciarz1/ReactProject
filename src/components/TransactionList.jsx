import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalSate';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Historia</h3>
            <ul id='list' className='list'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}
