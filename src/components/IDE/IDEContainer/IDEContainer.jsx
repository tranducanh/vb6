import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import FrameDesingerContainer from '../FrameDesigner/FrameDesingnerContainer'
import ViewProperties from '../Properties/ViewProperties';
import ToolBarItems from '../ToolBox/ToolBarItems';
export default class IDEContainer extends React.PureComponent
{
    render() {
        return (
        <div className="row app__container">               
               <ViewProperties/>
               {/* <FrameDesingerContainer/> */}
               <ToolBarItems/>
        </div>
        )
    }
}