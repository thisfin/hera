import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { Form, Input, Button } from 'antd'


class DemoInfoEditForm extends React.Component {
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
                <Form.Item label="App 名称">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="iOS 商店地址">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="Android 商店地址">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item label="Android 下载地址">
                    <Input style={{width: 100}}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        )
    }
}

ReactDOM.render(
    <DemoInfoEditForm/>, document.getElementById('root')
)
