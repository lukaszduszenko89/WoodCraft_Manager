import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import EditableTaskForm from "./EditableTaskForm";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";


export default function TaskCard({ task, editTask, deleteTask }) {

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEditedTask = (editedTask) => {
        editTask(editedTask);
        setIsEditing(false);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
    }

    const handleDelete = () => {
        deleteTask(task.id);
    }

    const cardStyle = {
        backgroundColor: task.status === 'Otwarta' ? '#40216b' : '#f9553a',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
    };

    return (
        <div className="task-card" style={cardStyle}>
            {isEditing ? (
                <EditableTaskForm
                    task={task}
                    saveEditedTask={handleSaveEditedTask}
                    cancelEdit={handleCancelEdit}
                />
            ) : (
                <>
                    <h3> <FontAwesomeIcon className="faUserTaskCard" icon={faUser}></FontAwesomeIcon>{task.title}</h3>
                    <p className="unicalID">ID: <FontAwesomeIcon icon={faBarcode} /> {task.id}</p>
                    <p>Opis: {task.description}</p>

                    <p>Status:   {task.status}</p>
                    <div className="iconTaskCard">
                        <FontAwesomeIcon className="faPenTaskCard" icon={faPen} onClick={handleEdit} />
                        <FontAwesomeIcon className="faTrashTaskCard" icon={faTrash} onClick={handleDelete} />
                    </div>
                </>
            )}

        </div>
    )

}