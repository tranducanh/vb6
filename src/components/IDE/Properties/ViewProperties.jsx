import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import PropertyItem from './PropertyItem'
@observer
export default class ViewProperties extends React.Component {
    render() {
        const { propertyStore } = this.props;
        if (propertyStore.properties === null)
            return null;

        return (
            <div className="card">               
                    <h5 className="card-title">Properties</h5>
                    <div className="card-body">
                        {this.props.propertyStore.properties.map((property) =>
                            //{
                            // console.log(Object.keys(property)[0]);
                            (<PropertyItem
                                key={Object.keys(property)[0]}
                                property={property}
                            />)
                            // }

                        )}
                    </div>
                </div>
                   
        )
    }
}
ViewProperties.propTypes = {
    propertyStore: PropTypes.object.isRequired
}