import { useEffect, useState } from "react";
import MainApp from "../aplication/MainApp";
import TaskForm from "../aplication/TaskForm";
import TaskCard from "../aplication/TaskCard";

export default function Add_Task() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks && savedTasks.length > 0) {
            setTasks(savedTasks);
        }
    }, []);



    const handleAddtask = (newTaskData) => {
        setTasks([...tasks, { ...newTaskData, additionalTasks: [] }]);
    }


    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleEditTask = (editedTask) => {
        const updatedTask = tasks.map(task =>
            task.id === editedTask.id ? editedTask : task);
        setTasks(updatedTask);
    };

    const handleDeleteTask = (taskId) => {
        const filteredTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(filteredTasks);
    }





    return (
        <>

            <div className="add-task">
                <h2>Zadania do wykonania</h2>
                <p>Tutaj możesz dodać, edytować oraz usuwać zadania, które zostały wykonane</p>
                <TaskForm addTask={handleAddtask} />
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <TaskCard
                            kay={index}
                            task={task}

                            editTask={handleEditTask}
                            deleteTask={handleDeleteTask}
                        />
                    ))}
                </div>

            </div>
            <MainApp />

        </>
    )

}