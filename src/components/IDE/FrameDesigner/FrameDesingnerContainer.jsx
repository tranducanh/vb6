import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import ControlItem from '../Items/ControlItem'

@observer
export default class FrameDesingnerContainer extends React.Component {
	render() {
		const {controlStore,propertyStore} = this.props;
		if (controlStore.controls.length === 0)
			return null;
		return <section className="main">		
			<ul className="todo-list">
				{this.props.controlStore.controls.map(control =>
					(<ControlItem
						key={control.id}
						control={control}	
						propertyStore ={propertyStore}				
					/>)
				)}
			</ul>
		</section>
	}
}

FrameDesingnerContainer.propTypes = {
	controlStore: PropTypes.object.isRequired,
	propertyStore: PropTypes.object.isRequired,
}
