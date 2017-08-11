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

class ListDoingMemos extends Component {
    constructor(props) {
        super(props);
        this.handleToTodo = this.handleToTodo.bind(this);
        this.handleToDone = this.handleToDone.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleToTodo(e) {
        const todoIndex = e.target.getAttribute("data-key")
        this.props.onDoingToTodo(todoIndex);
    }
    handleToDone(e) {
        const doneIndex = e.target.getAttribute("data-key")
        this.props.onDoingToDone(doneIndex)
    }
    handleDel(e) {
        const delIndex = e.target.getAttribute("data-key")
        this.props.onDel(delIndex)
    }
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.doing) {
                number += 1;
            }
            return true;
        });
        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>正在进行</h3>
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
                        if (item.doing) {
                            return (
                                <li key={i} style={{ opacity: item.doing ? '1' : '' }} >
                                    <Row>
                                        <Col span={3}>
                                            <input  type="checkbox" checked={item.doing} onChange={this.handleToTodo} data-key={i}  />
                                        </Col>
                                        <Col span={20}>
                                            <p  data-key={i}  onClick={this.handleToDone} >
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
export default ListDoingMemos