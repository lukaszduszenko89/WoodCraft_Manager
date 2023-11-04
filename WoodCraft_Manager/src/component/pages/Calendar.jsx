import React, { useState, useEffect } from 'react';
import MainApp from '../aplication/MainApp';

export default function Calendar() {
    const [calendarData, setCalendarData] = useState(() => {
        const dataFromStorage = localStorage.getItem('calendarData');
        return dataFromStorage ? JSON.parse(dataFromStorage) : [];
    });

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [meeting, setMeeting] = useState({ date: '', time: '', description: '' });

    const saveCalendarToLocalStorage = data => {
        localStorage.setItem('calendarData', JSON.stringify(data));
    };

    const handleAddMeeting = () => {
        if (meeting.date && meeting.time && meeting.description) {
            setCalendarData([...calendarData, meeting]);
            setMeeting({ date: '', time: '', description: '' });
        }
    };

    useEffect(() => {
        saveCalendarToLocalStorage(calendarData);
    }, [calendarData]);


    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return (
        <>

            <div className='main_dashboard'>

                <h2 className='calendar-header'>Nie zapomnij o żadnym spotkaniu !</h2>

                <div >
                    <h3 className='date-div-calendar'>
                        {`Dzisiejsza data: ( ${day}/${month}/${year} )`}
                    </h3>
                </div>
                <table className='calendar-table'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Godzina spotkania</th>
                            <th>Opis</th>
                            <th>Akcja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendarData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className='delete-btn-calendar'
                                        onClick={() => {
                                            const newData = [...calendarData];
                                            newData.splice(index, 1);
                                            setCalendarData(newData);
                                        }}
                                    >
                                        Usuń
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <input className='data-input-calendar'
                                    type="date"
                                    value={meeting.date}
                                    onChange={(e) => setMeeting({ ...meeting, date: e.target.value })}
                                />
                            </td>
                            <td>
                                <input className='time-input-calendar'
                                    type="time"
                                    value={meeting.time}
                                    onChange={(e) => setMeeting({ ...meeting, time: e.target.value })}
                                />
                            </td>
                            <td>
                                <input className='description-input-calendar'
                                    type="text"
                                    value={meeting.description}
                                    onChange={(e) => setMeeting({ ...meeting, description: e.target.value })}
                                />
                            </td>
                            <td>
                                <button className='save-meeting-btn' onClick={handleAddMeeting}>Zapisz spotkanie</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <MainApp />
        </>
    );
};



