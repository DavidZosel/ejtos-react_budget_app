import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const [currency, setCurrency] = useState('€');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className='alert alert-primary'>
            <div className="d-flex justify-content-between align-items-center">
                <span>bisher ausgegeben in {currency}: {totalExpenses}</span>
                <div>
                    <label htmlFor="currency-select" className="form-label me-2">Währung in €:</label>
                    <select id="currency-select" className="form-select" value={currency} onChange={handleCurrencyChange}>
                        <option value="$">Dollar ($)</option>
                        <option value="£">Pfund (£)</option>
                        <option value="€">Euro (€)</option>
                        <option value="₹">Rupie (₹)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ExpenseTotal;
