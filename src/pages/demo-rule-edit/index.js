import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button, Switch } from 'antd'
import { Select, Radio } from 'antd'

const { Option } = Select
const { TextArea } = Input


class DemoRuleEdit extends React.Component {
    render() {
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 8
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                }
            }
        }

        return (
            <Form {...formItemLayout}>
                <Form.Item label="应用">
                    <Select defaultValue="2" style={{ width: 120 }}>
                        <Option value="1">Mall</Option>
                        <Option value="2">CRM</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="系统">
                    <Radio.Group  defaultValue="a">
                        <Radio.Button value="a">iOS</Radio.Button>
                        <Radio.Button value="b">Android</Radio.Button>
                        <Radio.Button value="c">Both</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="描述">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="版本">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="更新提示">
                    <TextArea placeholder="请输入提示内容" autosize={{ minRows: 4}}/>
                </Form.Item>

                <Form.Item label="更新类型">
                <Radio.Group  defaultValue="a">
                        <Radio.Button value="a">强制</Radio.Button>
                        <Radio.Button value="b">提示</Radio.Button>
                        <Radio.Button value="c">静默 (Android only)</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="规则等级">
                <Radio.Group  defaultValue="a">
                        <Radio.Button value="a">high</Radio.Button>
                        <Radio.Button value="b">default</Radio.Button>
                        <Radio.Button value="c">low</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="流量规则">
                <Select defaultValue="2" style={{ width: 120 }}>
                        <Option value="1">无</Option>
                        <Option value="2">Andorid 浙江灰度</Option>
                        <Option value="2">店铺白名单</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        )
    }
}

ReactDOM.render(
    <DemoRuleEdit/>, document.getElementById('root')
)
