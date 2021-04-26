import React from 'react'
import { Bar } from 'react-chartjs-2'

const DBChart = () => {
    return (
        <div>
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [120, 190, 30, 50, 20, 30],
                        backgroundColor: [
                            'red'
                        ],
                        borderColor: [
                            'blue'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Quantity',
                        data: [100, 104, 67, 108, 37, 50],
                        backgroundColor: 'orange',
                        borderColor: 'red',
                    }
                ]
                }}
                height={300}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
}

export default DBChart