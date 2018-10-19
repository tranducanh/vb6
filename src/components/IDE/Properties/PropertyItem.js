import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable, expr } from 'mobx';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
@observer
export default class PropertyItem extends React.Component {
	@observable editText = "";
	render() {
		const { property } = this.props;
		return (
			    <div className="card">
					<label>
						{Object.keys(property)[0]}
					</label>
					<input
						value={Object.values(property)[0]}
						onBlur={this.handleSubmit}
						onChange={this.handleChange}
						onKeyDown={this.handleKeyDown}
					/>
				</div>
			
		);
	}

	handleSubmit = (event) => {
		const val = this.editText.trim();
		if (val) {
			this.props.property.setProperty(property.name, val);
			this.editText = val;
		}
		this.props.propertyStore.property = null;
	};

	handleEdit = () => {
		const property = this.props.property;
		this.editText = property.value;
	};

	handleKeyDown = (event) => {
		if (event.which === ESCAPE_KEY) {
			this.editText = this.props.property.value;
		} else if (event.which === ENTER_KEY) {
			this.handleSubmit(event);
		}
	};

	handleChange = (event) => {
		this.editText = event.target.value;
	};
}

PropertyItem.propTypes = {
	property: PropTypes.object.isRequired
};
