import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const saveBudget = () => {
        if (parseInt(newBudget) < totalExpenses) {
            window.alert("Das Budget darf nicht niedriger als die Gesamtausgaben sein.");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget in €:</span>
            <input type="number" value={newBudget} onChange={handleBudgetChange}></input>
            <button onClick={saveBudget}>Save</button>
        </div>
    );
};

export default Budget;
