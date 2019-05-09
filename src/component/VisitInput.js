import React from 'react'
import { DatePicker, InputNumber, Input, Form, Radio, Button } from 'antd'
import moment from 'moment'

class VisitInput extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        loading: false
    }
    handleSubmit = (e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fetch('http://localhost:3000/api/visit/create', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }).then(res => res.json()).then(res => {
                    console.log(res)
                    console.log(res['result'])
                    // this.props.close()
                    this.setState({
                        loading: false
                    })
                }).catch(error => {
                    console.log(error)
                    // this.props.close()
                    this.setState({
                        loading: false
                    })
                })
            }
        })
    }

    constructor(props) {
        super(props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                }
            }
        }
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="日期">
                    {
                        getFieldDecorator('gmt', {
                            rules: [{
                                required: true,
                                message: '不能为空'
                            }],
                            initialValue: moment()
                        })(
                            <DatePicker />
                        )
                    }
                </Form.Item>
                <Form.Item label="系统">
                    {
                        getFieldDecorator('oss', {
                            initialValue: '1'
                        })(
                            <Radio.Group>
                                <Radio.Button value="1" style={{ width: 90, textAlign: "center" }}>iOS</Radio.Button>
                                <Radio.Button value="2" style={{ width: 90, textAlign: "center" }}>Android</Radio.Button>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                <Form.Item label="版本">
                    {
                        getFieldDecorator('version', {
                            rules: [{
                                required: true,
                                message: '不能为空'
                            }]
                        })(
                            <Input style={{ width: 160 }} />
                        )
                    }
                </Form.Item>
                <Form.Item label="数量">
                    {
                        getFieldDecorator('count', {
                            rules: [{
                                required: true,
                                message: '不能为空'
                            }]
                        })(
                            <InputNumber min={0} />
                        )
                    }
                </Form.Item>
                <Form.Item label="占比%">
                    {
                        getFieldDecorator('percent', {
                            rules: [{
                                required: true,
                                message: '不能为空'
                            }]
                        })(
                            <InputNumber min={0} max={100} />
                        )
                    }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

export const VisitInputP = Form.create()(VisitInput);
