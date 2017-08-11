import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router'
//<Link> 可以知道哪个 route 的链接是激活状态的，并可以自动为该链接添加 activeClassName 或 activeStyle
export default class NavLink extends Component {
	render() {
		return (
			<Link {...this.props} activeClassName="active"  onlyActiveOnIndex={true}/>
		)

	}
}