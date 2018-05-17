import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeftMenu from './LeftMenu'
import Header from './Header'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
export default class CoreLayout extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    }
	constructor(props) {
		super(props);
	}
	render() {
        return (
            <div className="Main-Component">
                <LeftMenu />
                <Header />
                <div className="Main-content">
                    <ReactCSSTransitionGroup transitionName="transitionWrapper" component="div" className='transitionWrapper' transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                        <div key={pathName}>
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
	}
}