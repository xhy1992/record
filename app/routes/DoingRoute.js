import PropTypes from 'prop-types';
import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import ListDoingMemos from '../components/ListDoingMemos';
import {
	deleteTodo,
	changeDoingToDone,
	changeDoingToTodo
} from '../actions'
class DoingRoute extends Component {
	render() {
		const {
			todolist,
			dispatch
		} = this.props;
		return (
			<div>
            	<ListDoingMemos todolist={todolist} onDel={index=>dispatch(deleteTodo(index))}  
            		onDoingToDone={index=>dispatch(changeDoingToDone(index))} 
            		onDoingToTodo={index=>dispatch(changeDoingToTodo(index))}
            	/>
            </div>
		)
	}

}
DoingRoute.propTypes = {
	todolist: PropTypes.arrayOf(PropTypes.shape({
		todo: PropTypes.string.isRequired,
		istodo: PropTypes.bool.isRequired,
		doing: PropTypes.bool.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired).isRequired,
}

const mapConst = (state) => {
	return {
		todolist: state.todolist
	}
}

export default connect(mapConst)(DoingRoute);