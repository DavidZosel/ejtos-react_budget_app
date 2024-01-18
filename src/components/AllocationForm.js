import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost === '' || isNaN(cost)) {
            alert("Bitte geben Sie einen gültigen Betrag ein.");
            setCost("");
            return;
        }

        if (cost > remaining) {
            alert("Du verfügst über nicht so viel Geld: €" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className="d-flex align-items-center justify-content-start">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Ausgabenkategorie</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Auswählen</option>
                            <option value="Marketing" name="marketing"> Miete</option>
                            <option value="Sales" name="sales">Lebensmittel</option>
                            <option value="Finance" name="finance">Sparen</option>
                            <option value="HR" name="hr">Spaß</option>
                            <option value="IT" name="it">Weiterbildung</option>
                            <option value="Admin" name="admin">Urlaub</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Einteilung</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">€</span>
                        </div>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}>
                        </input>
                    </div>

                    <button className="btn btn-primary" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
