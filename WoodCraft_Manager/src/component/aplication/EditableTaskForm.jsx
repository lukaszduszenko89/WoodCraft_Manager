import { useState } from "react";

export default function EditableTaskForm({ task, saveEditedTask, cancelEdit }) {
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);
    const [editedStatus, setEditedStatus] = useState(task.status);
    const [additionalTasks, setAdditionalTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleSaveEditedTask = () => {
        saveEditedTask({
            ...task,
            title: editedTitle,
            description: editedDescription,
            status: editedStatus,
            additionalTasks,
        });
        cancelEdit();
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setAdditionalTasks([...additionalTasks, newTask]);
            setNewTask('');
        };
    };


    return (
        <div className="task-form">
            <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />

            <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />

            <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                <option value="Otwarta">Otwarte</option>
                <option value="Zamknięta">Zamknięte</option>
            </select>

            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Dodaj zadanie</button>

            <ul>
                {additionalTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            <button onClick={handleSaveEditedTask}>Zapisz zmiany</button>
            <button onClick={cancelEdit}>Anuluj</button>
        </div>
    )

}