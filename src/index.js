import React from 'react'
import ReactDOM from 'react-dom'
import { VisitVersionChart } from './component/VisitVersionChart'
import { VisitModal } from './component/VisitModal'
import { Divider } from 'antd'
import './index.css'

ReactDOM.render(
    <div>
        <VisitVersionChart os="1" title="iOS"/>
        <Divider />
        <VisitVersionChart os="2" title="Android"/>
        <Divider />
        <VisitModal />
    </div>, document.getElementById('root')
)

// function getNumber() {
//     return getRandomInt(90)
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
