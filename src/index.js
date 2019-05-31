import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import './index.css'

// window.location.href = 'visit-chart'
// window.location.href = 'demo-set-edit'
// window.location.href = 'demo-set-list'
// window.location.href = 'demo-pool-list'
// window.location.href = 'demo-pool-edit'
// window.location.href = 'demo-rule-edit'
// window.location.href = 'demo-rule-list'
window.location.href = 'link'

ReactDOM.render(
    <div>
        <Button type="link" href='visit-chart'>用户访问占比图表</Button>
        <Button type="link" href='visit-input'>用户访问占比录入</Button>
        <Button type="link" href='test'>test</Button>
        <Button type="link" href='tmp'>tmp</Button>
    </div>, document.getElementById('root')
)

// function getNumber() {
//     return getRandomInt(90)
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
