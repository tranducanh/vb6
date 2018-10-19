import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, expr} from 'mobx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
@observer
export default class ControlItem extends React.Component {
	@observable editText = "";

	render() {
		const { control,propertyStore} = this.props;
		return (
			<Card className="" onClick={this.handleEdit}>
				 <CardContent>			
					<label>
						{this.props.control.name}
					</label>
					
				</CardContent>				
			</Card>
		);
	}
	handleEdit = () => {	
		this.props.propertyStore.properties = this.props.control.properties;
		this.props.propertyStore.id = this.props.control.id;	
	};

}

ControlItem.propTypes = {	
	control: PropTypes.object.isRequired,
	propertyStore : PropTypes.object.isRequired
};
