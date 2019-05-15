import React from 'react'
import { Pie } from 'react-chartjs-2'
import { ColorUtil } from '../utils/ColorUtil'

const sources = {
    huawei: 22451,
    oppo: 20587,
    yt: 14935,
    vivo: 12622,
    tencent: 2485,
    xiaomi: 3453,
    ali: 78,
    baidu: 98,
    360: 5,
}

export class VisitSourceArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            backgroundColors: [],
            datas: []
        }
    }
    componentDidMount() {
        const [labelArray, colorArray, dataArray] = [new Array(), new Array(), new Array]
        Object.keys(sources).sort((a, b) => {
            return sources[b] - sources[a]
        }).forEach((value, index) => {
            labelArray.push(value)
            dataArray.push(sources[value])
            colorArray.push('#' + new ColorUtil().getColor(index))// + '50')
        })
        this.setState({
            labels: labelArray,
            backgroundColors: colorArray,
            datas: dataArray
        })
    }
    render() {
        const data = {
            labels: this.state.labels,
            datasets: [{
                data: this.state.datas,
                backgroundColor: this.state.backgroundColors,
                hoverBackgroundColor: this.state.backgroundColors
            }]
        }
        const options = {
            title: {
                display: true,
                text: 'Android 渠道来源'
            },
            legend: {
                display: true,
                position: 'right'
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            }
        }
        return <div><Pie data={data} options={options} /></div>
    }
}
