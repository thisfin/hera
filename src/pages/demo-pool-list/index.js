import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button, Descriptions } from 'antd'
import { element } from 'prop-types';


class DemoPoolList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Descriptions title={this.props.pool.desc} bordered column={1}>
                <Descriptions.Item label="店铺白名单">{this.props.pool.shopId}</Descriptions.Item>
                <Descriptions.Item label="区域">{this.props.pool.area}</Descriptions.Item>
                <Descriptions.Item label="反选">yes</Descriptions.Item>
                <Descriptions.Item label="">
                    <Button>编辑</Button>
                    <Button>删除</Button>
                </Descriptions.Item>
            </Descriptions>
        )
    }
}

const datas = [
    {
        desc: "浙江灰度",
        shopId: undefined,
        area: "浙江",
        reverse: false
    },{
        desc: "店铺白名单",
        shopId: "123,234,345",
        area: undefined,
        reverse: true
    }
]

ReactDOM.render(
    <div>
        <Button>新增</Button>
    {
        datas.map((element, i) => {
            return <DemoPoolList pool={element} key={i} />
        })
    }
    </div>, document.getElementById('root')
)
