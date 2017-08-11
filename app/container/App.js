//index.js可以在import的时候直接将路径写到文件夹的位置就可以了，系统会自动到文件夹中找index.js来进行索引导入
import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../components/style.less';
import {
	addTodo,
	search
} from '../actions';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
	}
	componentDidMount() {
		this.setState({
			value: this.state.value + 1
		})
		console.log(this.state.value);
		setTimeout(() => {
			this.setState({
				value: this.state.value + 1
			});
			console.log(this.state.value);
		}, 0);
	}
	render() {
		const {
			todolist,
			dispatch
		} = this.props;
		const allMemos = todolist.length;
		let [todoNumber, doingNumber, doneNumber] = [0, 0, 0];
		todolist.forEach((item) => {
			if (item.istodo) {
				todoNumber += 1;
			} else if (item.doing) {
				doingNumber += 1;
			} else {
				doneNumber += 1;
			}
		})
		return (
			<div>
				<Header todolist={todolist} 
					onAdd={text=>dispatch(addTodo(text))}
					onSearch={text =>dispatch(search(text))}
					onKeyUp={this.props.onKeyUp}
				/>
				<Navigation allMemos={allMemos}
					todoNumber={todoNumber}
                    doingNumber={doingNumber}
                    doneNumber={doneNumber}
				/>
				{this.props.children}
			</div>
		)
	}
}
App.propTypes = {
	todolist: PropTypes.arrayOf(PropTypes.shape({
		todo: PropTypes.string.isRequired,
		istodo: PropTypes.bool.isRequired,
		doing: PropTypes.bool.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired).isRequired,
};

const mapStateToProps = (state) => {
	return {
		todolist: state.todolist
	};
};
/*//第二种写法
const mapDispatchToProps = (dispatch) => {
	return {
		addTodos: (text) => {
			dispatch(addTodo(text));
		},
		searchText: (text) => {
			dispatch(search(text))
		}
	};
};
<Header todolist={todolist} 
	onAdd={text=>addTodos(text)}
	onSearch={text =>searchText(text)}
	onKeyUp={this.props.onKeyUp}
/>
const {todolist,addTodos,searchText}= this.props;
export default connect(mapStateToProps,mapDispatchToProps)(App);*/

export default connect(mapStateToProps)(App);