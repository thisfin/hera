import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button, Descriptions } from 'antd'
import { element } from 'prop-types';


class DemoInfoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Descriptions title={this.props.info.appName} bordered column={1}>
                <Descriptions.Item label="iOS 商店地址">{this.props.info.iosShopLink}</Descriptions.Item>
                <Descriptions.Item label="Android 商店地址">{this.props.info.androidShopLink}</Descriptions.Item>
                <Descriptions.Item label="Android 下载地址">{this.props.info.androidApkLink}</Descriptions.Item>
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
        appName: "Mall",
        iosShopLink: "http://linka",
        androidShopLink: "http://linkb",
        androidApkLink: "http://linkc"
    },{
        appName: "CRM",
        iosShopLink: "http://linka",
        androidShopLink: "http://linkb",
        androidApkLink: "http://linkc"
    }
]

ReactDOM.render(
    <div>
        <Button>新增</Button>
    {
        datas.map((element, i) => {
            return <DemoInfoList info={element} key={i} />
        })
    }
    </div>, document.getElementById('root')
)
