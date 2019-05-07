import React from 'react'
import ReactDOM from 'react-dom'
import { VisitVersionChart } from './component/VisitVersionChart'
import './index.css'

ReactDOM.render(
    <div>
        <VisitVersionChart os="1" title="iOS"/>
        <VisitVersionChart os="2" title="Android"/>
    </div>, document.getElementById('root')
)

// function getNumber() {
//     return getRandomInt(90)
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
