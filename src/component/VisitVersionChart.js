import React from 'react'
import { Line } from 'react-chartjs-2'
import { ChartData } from '../model/ChartData'
import moment from 'moment'

export class VisitVersionChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: [],
            chartDatas: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/visit/select?os=' + this.props.os, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            const dateSet = new Set()
            const versionSet = new Set()
            const flatMap = new Map()
            data.forEach(element => {
                dateSet.add(element.gmt)
                versionSet.add(element.version)

                if (flatMap[element.gmt]) {
                } else {
                    flatMap[element.gmt] = new Map()
                }
                flatMap[element.gmt][element.version] = element
            })
            // 日期 key & 版本 key
            let dateArray = Array.from(dateSet).sort()
            // 组合宽表
            const resultArray = Array.from(versionSet).sort().map(value => {
                return {
                    name: value,
                    datas: dateArray.map(date => flatMap[date][value])
                }
            })

            this.setState({
                dates: dateArray.map(value => moment(value).format('YYYY-MM-DD')),
                datas: resultArray.map((value, index) => new ChartData(value.name, value.datas.map(data => (data == undefined ? undefined : data.percent)), index))
            })
        })
    }
    render() {
        const data = {
            labels: this.state.dates,
            datasets: this.state.datas
        }
        const options = {
            title: {
                display: true,
                text: this.props.title
            },
            legend: {
                display: true,
                position: "right"
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{ // y 轴增加百分号
                    ticks: {
                        callback: value => {
                            return value + '%'
                        }
                    },
                    position: 'left'
                    // ,
                    // scaleLabel: {
                    //     display: true,
                    //     labelString: 'Percentage'
                    // }
                }]
            }
        }
        return <Line data={data} options={options}/>
    }
}
