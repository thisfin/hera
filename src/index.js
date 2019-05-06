import React from 'react'
import ReactDOM from 'react-dom'
import { Line } from 'react-chartjs-2'
import { ChartData } from './model/ChartData'

import './index.css'

var names = ['Alice', 'Emily', 'Kate']

class ChartA extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3000/api/visit/select', {
            method: 'GET',
            // mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.length)
        })
    }
    render() {
        const data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                new ChartData('first', [65, 59, 80, 81, 56, 55, 40], 0),
                new ChartData('second', [null, 59, 90, 75, 43, 26, null], 1),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 2),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 3),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 4),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 5),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 6),
                new ChartData('second', [getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber(), getNumber()], 7)
                // {
                //     label: 'My First dataset',
                //     fill: false,
                //     // lineTension: 0.1,
                //     backgroundColor: '#622599',//'rgba(75,192,192,0.4)',
                //     borderColor: '#62259980',//'rgba(75,192,192,0.4)',
                //     // borderCapStyle: 'butt',
                //     // borderDash: [],
                //     // borderDashOffset: 0.0,
                //     // borderJoinStyle: 'miter',
                //     // pointBorderColor: 'rgba(75,192,192,1)',
                //     // pointBackgroundColor: '#fff',
                //     // pointBorderWidth: 1,
                //     // pointHoverRadius: 5,
                //     pointHoverBackgroundColor: '#622599',//'rgba(75,192,192,1)',
                //     // pointHoverBorderColor: 'rgba(220,220,220,1)',
                //     // pointHoverBorderWidth: 2,
                //     // pointRadius: 1,
                //     // pointHitRadius: 10,
                //     data: [65, 59, 80, 81, 56, 55, 40]
                // },

                // {
                //     label: 'My First dataset',
                //     fill: false,
                //     // lineTension: 0.1,
                //     backgroundColor: 'red',//'rgba(75,192,192,0.4)',
                //     borderColor: 'rgba(255,0,0,0.4)',//'rgba(75,192,192,1)',
                //     // borderCapStyle: 'butt',
                //     // borderDash: [],
                //     // borderDashOffset: 0.0,
                //     // borderJoinStyle: 'miter',
                //     // pointBorderColor: 'rgba(75,192,192,1)',
                //     // pointBackgroundColor: '#fff',
                //     // pointBorderWidth: 1,
                //     // pointHoverRadius: 5,
                //     pointHoverBackgroundColor: 'red',//'rgba(75,192,192,1)',
                //     // pointHoverBorderColor: 'rgba(220,220,220,1)',
                //     // pointHoverBorderWidth: 2,
                //     // pointRadius: 1,
                //     // pointHitRadius: 10,
                //     data: [null, 59, 80, 81, 56, 55, null]
                // }
            ]
        }
        const options = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
        return <Line data={data1} options={options}/>
    }
}

class Div1 extends React.Component {
    render() {
        return (
        <div>
            {
                names.map(function (name, i) {
                    return <div key={i}>Hello, {name}!</div>
                })
            }
        </div>
        )
    }
}

ReactDOM.render(
    // <div>
    //     {
    //         names.map(function (name) {
    //             return <div>Hello, {name}!</div>
    //         })
    //     }
    // </div>,
    // document.getElementById('root')
    // MyComponent, document.getElementById('root')
    // <LineChart data={data} options={options} width="600" height="250"/>, document.getElementById('root')
    <ChartA />, document.getElementById('root')
    // <Div1 />, document.getElementById('root')
)

// #622599 0054a0 aaba0a dd7500 e23d28 3d8e33 3399ff ff3399 fcd116 999999

function getColor(i) {
    var colors = ['622599', '0054a0', 'aaba0a', 'dd7500', 'e23d28', '3d8e33', '3399ff', 'ff3399', 'fcd116', '999999']
    return '#' + colors[i % colors.length];
}

function getNumber() {
    return getRandomInt(90)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
