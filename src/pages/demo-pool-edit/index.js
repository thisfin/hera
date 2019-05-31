import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button, Switch } from 'antd'
const { TextArea } = Input;



class DemoPoolEdit extends React.Component {
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
                <Form.Item label="描述">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="区域">
                    <a>this add a tree</a>
                </Form.Item>
                <Form.Item label="店铺白名单">
                    <TextArea placeholder="请输入店铺 id, 多个以半角逗号分隔" autosize={{ minRows: 2}}/>
                </Form.Item>
                <Form.Item label="反选">
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        )
    }
}

ReactDOM.render(
    <DemoPoolEdit/>, document.getElementById('root')
)
