import {
	ADD_TODO,
	DELETE_TODO,
	CHANGE_TODO_TO_DOING,
	CHANGE_DOING_TO_DONE,
	CHANGE_DOING_TO_TODO,
	CHANGE_DONE_TO_DOING,
	SEARCH,
} from '../actions';
let todos;
(() => {
	if (localStorage.todos) {
		todos = JSON.parse(localStorage.todos);
	} else {
		todos = [];
	}
})()


const todolist = (state = todos, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state, {
					todo: action.text,
					istodo: true,
					doing: false,
					done: false
				}
			]
		case CHANGE_TODO_TO_DOING:
			localStorage.setItem('todos', JSON.stringify([
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: true,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			]));
			return [
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: true,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			]
		case CHANGE_DOING_TO_DONE:
			localStorage.setItem('todos', JSON.stringify([
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: false,
					done: true
				},
				...state.slice(parseInt(action.index) + 1)
			]));
			return [
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: false,
					done: true
				},
				...state.slice(parseInt(action.index) + 1)
			]
		case CHANGE_DOING_TO_TODO:
			localStorage.setItem('todos', JSON.stringify([
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: true,
					doing: false,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			]));
			return [
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: true,
					doing: false,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			];
		case CHANGE_DONE_TO_DOING:
			localStorage.setItem('todos', JSON.stringify([
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: true,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			]));
			return [
				...state.slice(0, action.index), {
					todo: state[action.index].todo,
					istodo: false,
					doing: true,
					done: false
				},
				...state.slice(parseInt(action.index) + 1)
			];
		case DELETE_TODO:
			localStorage.setItem('todos', JSON.stringify([
				...state.slice(0, action.index),
				...state.slice(parseInt(action.index) + 1)
			]));
			return [
				...state.slice(0, action.index),
				...state.slice(parseInt(action.index) + 1)
			];
		case SEARCH:
			let text = action.text;
			let reg = eval('/' + text + '/');
			return state.filter(item => item.todo.match(reg));
		default:
			return state;
	}
}

export default todolist;
/*
*	帮助理解
	var state=[{id:0,name:'123'},{id:1,name:'qqq'},{id:2,name:'345'},{id:3,name:'www'}]；
	var xx=[...state.slice(0, 1),  {id:1,name:'tihuan'},...state.slice(2)]
 	xx//{id:0,name:'123'},{id:1,name:'tihuan'},{id:2,name:'345'},{id:3,name:'www'}
 */