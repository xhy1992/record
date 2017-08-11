import React, {
    Component
} from 'react';
import NavLink from './navLink';
export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation">
                <ul className="nav">
                    <li>
                        <NavLink  to="/">
                            全部&nbsp;<span>{this.props.allMemos}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/todo">
                            新建事项&nbsp;<span>{this.props.todoNumber}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/doing">
                            正在进行&nbsp;<span>{this.props.doingNumber}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/done">
                            已完成&nbsp;<span>{this.props.doneNumber}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}