import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import ToolBarItems from './IDE/ToolBox/ToolBarItems'

import DevTool from 'mobx-react-devtools';

@observer
export default class TodoApp extends React.Component {
	render() {
		const {todoStore, viewStore,controlStore, propertyStore} = this.props;
		return (
			<div>
				{/* <DevTool />		 */}
				<ToolBarItems propertyStore={propertyStore} controlStore={controlStore}/>
			</div>
		);
	}
	componentDidMount() {
		if (__CLIENT__) {
			var { Router } = require('director/build/director');
			var viewStore = this.props.viewStore;
			var router = Router({
				'/': function() { viewStore.todoFilter = ALL_TODOS; },
				'/active': function() { viewStore.todoFilter = ACTIVE_TODOS; },
				'/completed': function() { viewStore.todoFilter = COMPLETED_TODOS; }
			});
		router.init('/');
		}
	}
}
TodoApp.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired,
	controlStore: PropTypes.object.isRequired,
	propertyStore: PropTypes.object.isRequired
};
