import PropTypes from 'prop-types';
import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import ListDoneMemos from '../components/ListDoneMemos';
import {
	deleteTodo,
	changeDoneToDoing
} from '../actions';
class DoneRoute extends Component {
	render() {
		const {
			todolist,
			onToDoings,
			deletes
		} = this.props;
		return (
			<div>
				<ListDoneMemos todolist={todolist}  onDoneToDoing={index=>onToDoings(index)} onDel={index=>deletes(index)}/>
            </div>
		)
	}

}
const mapList = (state) => {
	return {
		todolist: state.todolist
	}
};
const mapdis = (dispatch) => {
	return {
		onToDoings: (text) => {
			dispatch(changeDoneToDoing(text));
		},
		deletes: (text) => {
			dispatch(deleteTodo(text));
		}
	}
}
export default connect(mapList, mapdis)(DoneRoute);