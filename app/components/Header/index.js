import PropTypes from 'prop-types';
import React, {
	Component
} from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		/*
		 *  hidden,hint属性判断用户输入空字符
		 */
		this.state = {
			hidden: true,
			hint: '',
		};
		this.handleKeyUp = this.handleKeyUp.bind(this);
	};
	handleKeyUp(e) {
		if (e.keyCode !== '13') {
			this.setState({
				hidden: true
			})
		}
	}
	handleClick(e) {
		e.preventDefault();
		//const node = findDOMNode(this.refs.inputnew);
		const node = this.refs.inputNew;
		const text = node.value.trim();
		if (text.length > 20) {
			this.setState({
				hidden: false
			});
			this.setState({
				hint: "请输入20字以内"
			})
		} else if (text !== "") {
			this.props.onAdd(text);
			this.setState({
				hidden: true
			});
		} else {
			this.setState({
				hidden: false
			});
			this.setState({
				hint: "请输入内容"
			})
		}
		node.value = '';
	}
	handleSearch(e) {
		e.preventDefault();
		const node = this.refs.inputNew;
		const text = node.value.trim();
		this.props.onSearch(text);
		node.value = '';
	}
	render() {
		return (
			<header className="header">
				<div className="wrap">
					<form>
						<label htmlFor="new-todo" className="titel">备忘录</label>
						<div className="option">
							<input onKeyUp={this.handleKeyUp} ref="inputNew" type="text" id="new-todo" 
								placeholder="新建事项（20字以内）" defaultValue={this.props.text}/>
							<button onClick={e=>this.handleClick(e)}>添加</button>
							<button onClick={e=>this.handleSearch(e)}>搜索</button>
						</div>
					</form>
					<div
	                    className="hint"
	                    style={{
	                        display: this.state.hidden
	                        ? 'none'
	                        : 'inline-block',
	                    }}
	                >
	                    <div className="test">
	                        <span className="bot" />
	                        <span className="top" />
	                    </div>
	                    <div>
	                        {this.state.hint}
	                    </div>
	                </div>
				</div>
            </header>
		)
	}

}
export default Header;