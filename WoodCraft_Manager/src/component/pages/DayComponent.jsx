import React, { useState } from "react";

export default function DayComponent({ date, meetings, onAddMeeting, onEditMeeting, onDeleteMeeting }) {
    const [newMeeting, setNewMeeting] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddMeeting = () => {
        onAddMeeting(date, { description: newMeeting });
        setNewMeeting('');
    };

    const handleEditMeeting = (index) => {
        onEditMeeting(date, index, meetings[index].description);
        setEditIndex(-1);
    };

    const handleDeleteMeeting = (index) => {
        onDeleteMeeting(date, index);
    };

    return (
        <div className="day">
            <h4>{date.toDateString()}</h4>
            <ul>
                {
                    meetings &&
                    meetings.map((meeting, index) => (
                        <li key={index}>
                            {editIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={meeting.description}
                                        onChange={(e) => onEditMeeting(date, index, e.target.value)
                                        }
                                    />
                                    <button onClick={() => handleEditMeeting(index)}>Save</button>
                                </>
                            ) : (

                                <>
                                    {meeting.description}
                                    <button onClick={() => setEditIndex}>Edit</button>
                                    <button onClick={() => handleDeleteMeeting(index)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))
                }
            </ul>
            <div>
                <input
                    type="text"
                    value={newMeeting}
                    onChange={(e) => setNewMeeting(e.target.value)} />
                <button onClick={handleAddMeeting}>Add Meeting</button>
            </div>
        </div>
    )

}

