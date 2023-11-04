import MainApp from "../aplication/MainApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Modal from "../aplication/Modal";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



export default function AddClient() {


    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState(() => {
        const saveData = localStorage.getItem('clientData');
        return saveData ? JSON.parse(saveData) : [{ Number: "", name: "", lastName: "", email: "", phone: "", city: "", state: "" }]
    })

    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('clientData', JSON.stringify(rows));
    }, [rows]);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex))
    };

    const addClient = (newClientData) => {
        if (editIndex !== null) {
            const updatedRows = [...rows];
            updatedRows[editIndex] = newClientData;
            setRows(updatedRows);
            setEditIndex(null);
        } else {
            setRows([...rows, newClientData]);
        }

        setModalOpen(false);
    };



    const handleEditRow = (idx) => {
        setEditIndex(idx);
        setModalOpen(true);
    }





    return (
        <>

            <div className="dashboard">
                <div className="tableWrapper">
                    <h2>Dodaj nowego klienta:</h2>
                    <table className="addUserTable">
                        <thead>
                            <tr>
                                <th><FontAwesomeIcon icon={faHashtag} /></th>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th><FontAwesomeIcon icon={faAt} /> Adres email</th>
                                <th><FontAwesomeIcon icon={faMobileScreen} /> Numer telefonu</th>
                                <th><FontAwesomeIcon icon={faLocationDot} /> Miasto</th>
                                <th>Status współpracy</th>
                                <th>Akcja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((client, idx) => {


                                    return <tr key={idx}>
                                        <td>{client.Number}</td>
                                        <td>{client.name}</td>
                                        <td>{client.lastName}</td>
                                        <td><FontAwesomeIcon icon={faAt} /> {client.email}</td>
                                        <td><FontAwesomeIcon icon={faMobileScreen} /> {client.phone}</td>
                                        <td><FontAwesomeIcon icon={faLocationDot} /> {client.city}</td>

                                        <td>
                                            <span className={`label label-${client.state}`}>{client.state}
                                            </span>

                                        </td>
                                        <td>
                                            <span className="actions">
                                                <FontAwesomeIcon className="delete-btn" onClick={() => handleDeleteRow(idx)} icon={faTrash} />
                                                <FontAwesomeIcon className="edit-btn" onClick={() => handleEditRow(idx)} icon={faPen} />
                                            </span>
                                        </td>
                                    </tr>
                                })

                            }




                        </tbody>

                    </table>
                    <button className="btn-add-new-client" onClick={() => setModalOpen(true)}>Dodaj klienta</button>
                </div>
            </div>



            {modalOpen && <Modal
                closeModal={() => { setModalOpen(false) }}
                handleAction={addClient}
                operationType={editIndex !== null ? 'edit' : 'add'}
                formData={editIndex !== null ? rows[editIndex] : null}
            />}

            <MainApp />

        </>
    )
}







// const Add_Client = () => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         const storedClients = localStorage.getItem('clients');
//         if (storedClients) {
//             setClients(JSON.parse(storedClients));
//         }
//     }, []);

//     const addClient = (clientData) => {
//         const newClientList = [...clients, { ...clientData, number: clients.length + 1 }];
//         setClients(newClientList);
//         localStorage.setItem('clients', JSON.stringify(newClientList));
//     };

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="add-client">
//             <button onClick={openModal}>Add Client</button>
//             {isModalOpen && <Modal closeModal={closeModal} addClient={addClient} />}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Number</th>
//                         <th>Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>City</th>
//                         <th>State</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {clients.map((client, index) => (
//                         <tr key={index}>
//                             <td>{client.number}</td>
//                             <td>{client.name}</td>
//                             <td>{client.lastName}</td>
//                             <td>{client.email}</td>
//                             <td>{client.phone}</td>
//                             <td>{client.city}</td>
//                             <td>{client.state}</td>
//                             <td>
//                                 {/* Icons for actions (delete and edit) */}
//                                 <button onClick={() => handleDeleteClient(index)}>Delete</button>
//                                 <button onClick={() => handleEditClient(index)}>Edit</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Add_Client;