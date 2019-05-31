import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button, Switch } from 'antd'
import { Select, Radio, Table } from 'antd'

const { Option } = Select
const { TextArea } = Input


class DemoRuleList extends React.Component {
    render() {
        const columns = [
            {
                title: 'App',
                dataIndex: 'appId',
                key: 'appId'
            }, {
                title: '系统',
                dataIndex: 'os',
                key: 'os'
            }, {
                title: '描述',
                dataIndex: 'content',
                key: 'content'
            }, {
                title: '版本规则',
                dataIndex: 'version',
                key: 'version'
            }, {
                title: '更新类型',
                dataIndex: 'updateType',
                key: 'updateType'
            }, {
                title: '优先级',
                dataIndex: 'updateLevel',
                key: 'updateLevel'
            }, {
                title: '流量控制',
                dataIndex: 'updatePoolId',
                key: 'updatePoolId'
            }, {
                title: '操作',
                key: 'ctrl',
                render: (text, record) => (
                    <div>
                        <Button>编辑</Button>
                        <Button>生效</Button>
                        <Button>删除</Button>
                    </div>
                )
            }
        ]

        const dataSources = [
            {
                key: '1',
                appId: 'Mall',
                os: 'iOS',
                content: 'Mall iOS 强更新规则',
                version: '(,3.17)',
                updateType: '强制',
                updateLevel: 'low',
                updatePoolId: undefined,
                ctrl: undefined
            }, {
                key: '1',
                appId: 'Mall',
                os: 'Android',
                content: 'Mall Android 强更新规则',
                version: '(,3.16)',
                updateType: '',
                updateLevel: 'low',
                updatePoolId: undefined,
                ctrl: undefined
            }
        ]

        return (
            <Table dataSource={dataSources} columns={columns}/>
        )
    }
}

ReactDOM.render(
    <DemoRuleList/>, document.getElementById('root')
)
