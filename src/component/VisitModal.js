import React from 'react'
import { Button, Modal } from 'antd'
import { VisitInputP } from './VisitInput'

export class VisitModal extends React.Component {
    state = {
        modalVisible: false
    }
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>录入</Button>
                <Modal title="访问信息" visible={this.state.modalVisible} onCancel={this.closeModal} footer={null}>
                    <VisitInputP close={this.closeModal}/>
                </Modal>
            </div>
        )
    }
}
