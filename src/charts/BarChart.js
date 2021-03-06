import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [120, 190, 30, 50, 20, 30],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Quantity',
                        data: [100, 104, 67, 108, 37, 50],
                        backgroundColor: '#45a164',
                        borderColor: '#45a164',
                        borderWidth: 1,
                    }
                ]
                }}
                height={50}
                width={50}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        yAxes:
                            {
                                ticks: {
                                    beginAtZero: true,
                                    color: 'white',
                                    font: {weight: 'lighter'},
                                },                               
                            },
                        xAxes:
                            {
                                ticks: {
                                    beginAtZero: true,
                                    color: 'white',
                                    font: {weight: 'lighter'},
                                },                               
                            },
                    },
                }}
            />
        </div>
    )
}

export default BarChart