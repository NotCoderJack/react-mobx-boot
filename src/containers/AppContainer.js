import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {browserHistory, Router, RouterContext} from 'react-router'
import {Provider} from 'mobx-react'

class AppContainer extends Component {
	static propTypes = {
		routes: PropTypes.object.isRequired,
		store: PropTypes.object.isRequired
	}
	shouldComponentUpdate() {
		return false
	}
	render() {
		const {routes, store} = this.props
		return (
			<Provider store={store}>
				<div style={{height: '100%'}}>
					<Router history={browserHistory} children={routes} render={(props) => {return <RouterContext {...props} />}}/>
				</div>
			</Provider>
		)
	}
}
export default AppContainer