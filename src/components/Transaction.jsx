import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate'

export const Transaction = ({ transaction }) => {
    const { deleteTransation } = useContext(GlobalContext);
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount}zł</span><button className='delete-btn' onClick={() => deleteTransation(transaction.id)}>x</button>
        </li>
    )
}
