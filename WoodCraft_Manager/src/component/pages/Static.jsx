import MainApp from "../aplication/MainApp";
import Chart from 'chart.js/auto'
import React, { useEffect, useRef, useState } from "react";

const Static = () => {
    const chartRef = useRef(null);
    const [clientCount, setClientCount] = useState(10);
    const [meetingCount, setMeetingCount] = useState(20);
    const [taskCount, setTaskCount] = useState(15);


    useEffect(() => {
        renderChart();
    }, [clientCount, meetingCount, taskCount]);

    const renderChart = () => {
        const ctx = chartRef.current;
        if (ctx) {
            if (ctx.chart) {
                ctx.chart.destroy();
            }
            ctx.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Nowi klienci', 'Spotkania w tym miesiącu', 'Wykonane zlecenia'],
                    datasets: [
                        {
                            label: 'Obecny miesiąc',
                            data: [clientCount, meetingCount, taskCount],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 2,
                        },

                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    };

    return (
        <>
            <MainApp />
            <div className="static">
                <div className="chart-container">
                    <h2>Statystyki</h2>
                    <canvas ref={chartRef} className="chart-canvas" width="400" height="400"></canvas>
                    <div className="chart-legend"></div>
                    <div className="input-fields">
                        <input className="barStatic"
                            type="number"
                            value={clientCount}
                            onChange={(e) => setClientCount(parseInt(e.target.value))}
                            placeholder="Number of new clients"
                        />
                        <input className="barStatic"
                            type="number"
                            value={meetingCount}
                            onChange={(e) => setMeetingCount(parseInt(e.target.value))}
                            placeholder="Number of meetings"
                        />
                        <input className="barStatic"
                            type="number"
                            value={taskCount}
                            onChange={(e) => setTaskCount(parseInt(e.target.value))}
                            placeholder="Number of new tasks"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Static;