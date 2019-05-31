import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

ReactDOM.render(
    <div>
        <Button type="link" href='demo-set-edit'>产品编辑</Button>
        <Button type="link" href='demo-set-list'>产品列表</Button>
        <Button type="link" href='demo-pool-list'>流量列表</Button>
        <Button type="link" href='demo-pool-edit'>流量编辑</Button>
        <Button type="link" href='demo-rule-edit'>规则编辑</Button>
        <Button type="link" href='demo-rule-list'>规则列表</Button>
    </div>, document.getElementById('root')
)
