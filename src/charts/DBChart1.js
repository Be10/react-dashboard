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
                        backgroundColor: '#4799eb',
                        borderColor: '#4799eb',
                        borderWidth: 1,
                    },
                    {
                        label: 'Quantity',
                        data: [100, 104, 67, 108, 37, 50],
                        backgroundColor: '#c65757',
                        borderColor: '#c65757',
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

export default DBChart