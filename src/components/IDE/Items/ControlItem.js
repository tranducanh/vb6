import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, expr} from 'mobx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
const styles = theme => ({
	card: {
	  maxWidth: 200,
	}
});
@observer
class ControlItem extends React.Component {
	@observable editText = "";
   // styles = { fontSize: 32, fontWeight: 'bold', margin: 20, cursor: 'pointer' }; 
	render() {
		const { control,propertyStore,classes} = this.props;
		
		return (
			<Card className={classes.card} onClick={this.handleEdit}>
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
	propertyStore : PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};
export default  withStyles(styles)(ControlItem);
