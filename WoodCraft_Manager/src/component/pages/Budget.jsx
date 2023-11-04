import MainApp from "../aplication/MainApp";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Budget() {

    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({
        firstName: '',
        lastName: '',
        advancePayment: 0,
        plannedAmount: 0,
        dateOfPayment: '',
        paymentStatus: 'Nie opłacone'
    });


    useEffect(() => {
        const storedClients = localStorage.getItem('budgetClients');
        if (storedClients) {
            setClients(JSON.parse(storedClients));
        }
    }, [])




    const handleAddClient = () => {
        setClients([...clients, newClient]);
        setNewClient({
            firstName: '',
            lastName: '',
            advancePayment: 0,
            plannedAmount: 0,
            dateOfPayment: '',
            paymentStatus: 'Nie opłacone'
        });
    };

    const handleDeleteClient = (index) => {
        const updatedClients = clients.filter((_, i) => i !== index);
        setClients(updatedClients);
    };

    useEffect(() => {
        localStorage.setItem('budgetClients', JSON.stringify(clients));
    }, [clients]);


    return (
        <>

            <div className="main_dashboard">
                <div className="dashboard">


                    <div className="budget-component">
                        <h2>Kontroluj swoje finanse</h2>
                        <div className="table-wrapper">
                            <table className="full-width">
                                <thead>
                                    <tr>
                                        <th>Imię</th>
                                        <th>Nazwisko</th>
                                        <th>Zaliczka</th>
                                        <th>Planowana kwota</th>
                                        <th>Data wpłaty</th>
                                        <th>Status płatności</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody className="tBodyBudget">
                                    <tr>
                                        <td>
                                            <input
                                                type="text"
                                                value={newClient.firstName}
                                                onChange={(e) => setNewClient({ ...newClient, firstName: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={newClient.lastName}
                                                onChange={(e) => setNewClient({ ...newClient, lastName: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={newClient.advancePayment}
                                                onChange={(e) => setNewClient({ ...newClient, advancePayment: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={newClient.plannedAmount}
                                                onChange={(e) => setNewClient({ ...newClient, plannedAmount: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                value={newClient.dateOfPayment}
                                                onChange={(e) => setNewClient({ ...newClient, dateOfPayment: e.target.value })}
                                            />
                                        </td>
                                        <td>
                                            <select
                                                value={newClient.paymentStatus}
                                                onChange={(e) => setNewClient({ ...newClient, paymentStatus: e.target.value })}
                                            >
                                                <option className="nie-oplacone" value="Nie opłacone">Nie opłacone</option>
                                                <option value="Opłacone">Opłacone</option>
                                                <option value="Zaliczka">Wpłacona zaliczka</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button onClick={handleAddClient}>Dodaj</button>
                                        </td>
                                    </tr>
                                    {clients.map((client, index) => (
                                        <tr key={index} className={client.paymentStatus.toLowerCase()}>
                                            <td>{client.firstName}</td>
                                            <td>{client.lastName}</td>
                                            <td>{client.advancePayment} zł</td>
                                            <td>{client.plannedAmount} zł</td>
                                            <td><FontAwesomeIcon icon={faCalendar} /> {client.dateOfPayment}</td>
                                            <td>{client.paymentStatus}</td>
                                            <td><button onClick={() => handleDeleteClient(index)}>Usuń</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>
            </div>
            <MainApp />
        </>
    )
}