import React from 'react'
import ReactDOM from 'react-dom'
import { VisitVersionChart } from '../../component/VisitVersionChart'
import { Divider } from 'antd'

ReactDOM.render(
    <div>
        <VisitVersionChart os="1" title="iOS"/>
        <Divider />
        <VisitVersionChart os="2" title="Android"/>
    </div>, document.getElementById('root')
)
