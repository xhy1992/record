import React, {
    Component
} from 'react';

import {
    Collapse,
    Row,
    Col,
    Icon,
    Button
} from 'antd';
class ListDoneMemos extends Component {
    constructor(props) {
        super(props);
        this.handleToDoing = this.handleToDoing.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleToDoing(e) {
        var doingIndex = e.target.getAttribute("data-key");
        this.props.onDoneToDoing(doingIndex);
    }
    handleDel(e) {
        var delIndex = e.target.getAttribute("data-key");
        this.props.onDel(delIndex);
    }
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.done) {
                number += 1
            }
            return true;
        });
        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>已完成</h3>
                </Col>
                <Col span={2}>
                    <Button
                        size="small"
                        shape="circle"
                    >
                        {number}
                    </Button>
                </Col>
            </Row>
        );
        return (
            <Collapse className="doing">
            <Panel header={header}>
                <ul>{
                    this.props.todolist.map((item, i) => {
                        if (item.done) {
                            return (
                                <li key={i} style={{ opacity: item.done ? '1' : '' }} >
                                    <Row>
                                        <Col span={3}>
                                            <input  type="checkbox" checked={item.done} data-key={i} readOnly="readOnly" />
                                        </Col>
                                        <Col span={20}>
                                            <p  data-key={i} style={{textDecoration: "line-through"}} onClick={this.handleToDoing}>
                                                {item.todo}
                                            </p>
                                        </Col>
                                        <Col span={1}>
                                            <Icon  type="close-circle" data-key={i}  style={{ fontSize: '20px'}} onClick={this.handleDel}
                                            />
                                        </Col>
                                    </Row>
                                </li>
                            );
                        }
                        return true;
                    })
                    }
                </ul>
            </Panel>
        </Collapse>
        )
    }
}
export default ListDoneMemos;