import { useState } from "react";


export default function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Otwarta');



    const handleSaveTask = () => {
        const newTask = {
            id: Date.now(),
            title,
            description,
            status,


        };

        addTask(newTask);
        setTitle('');
        setDescription('');
        setStatus('Otwarta');


    };




    return (
        <div className="task-form">

            <div className="firstTaskLabel">
                <label className="taskFormLabel">Podaj klienta, do którego przypiszesz zadania:</label>
                <input type="text" placeholder="Imię i nazwisko" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="textArea">
                <label className="taskFormLabel">Wpisz zadania. Po zapisaniu będziesz mógł je edytować!</label>
                <textarea placeholder="Opis zadania" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="taskFormSelect">
                <label className="taskFormSelectInput">Status współpracy:</label>
                <select className="taskFormSelect" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Otwarta">Otwarta</option>
                    <option value="Zamknięta">Zamknięta</option>
                </select>
            </div>


            <button className="taskFormButton" onClick={handleSaveTask}>Dodaj zadanie</button>
        </div>
    )


}