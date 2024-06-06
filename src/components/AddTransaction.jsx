import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalSate';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault(); // Strona się nie odświerza

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), // Randomowe ID transakcji
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Dodaj nową transakcja</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Nazwa</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Wprowadź nazwę" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Ilość <br />
                        (ujemna - wydatek, dodatnia - przychód)</label
                    >
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Wprowadź nazwę" />
                </div>
                <button className="btn">Dodaj transakcja</button>
            </form>
        </div>
    )
}
