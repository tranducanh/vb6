import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import cx from 'classnames';
import GroupControl from './GroupControl';
import TextBoxControl from './TextBoxControl';
import RadioControl from './RadioControl';
import CheckBoxControl from './CheckBoxControl';
import DropDownControl from './DropDownControl';
import UploadFileControl from './UploadFileControl';
import FrameDesignerContainer from '../FrameDesigner/FrameDesingnerContainer'
import ViewProperties from '../Properties/ViewProperties'
@observer
export default class ToolBarItems extends React.Component {
  // constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //     controls: ['a'],
  //     //     count:''
  //     // }
  //     // this.handleCount = this.handleCount.bind(this);
  //   }

  // handleCount() {       
  //     this.setState({            
  //         controls: [...this.state.controls, 'b']
  //       });
  // }
  render() {
    const { controlStore, propertyStore } = this.props;
    return (
      <div className="row">
        <div className="col-2 border border-primary ml-2">
          <GroupControl label="Group" controlStore={this.props.controlStore} />
          <TextBoxControl label="TextBox" controlStore={this.props.controlStore} />
          <RadioControl label="Radio" controlStore={this.props.controlStore} />
          <CheckBoxControl label="CheckBox" controlStore={this.props.controlStore} />
          <DropDownControl label="DropDown" controlStore={this.props.controlStore} />
          <UploadFileControl label="Upload" controlStore={this.props.controlStore} />
        </div>
        <div className="col-7">
          {<FrameDesignerContainer propertyStore={this.props.propertyStore} controlStore={this.props.controlStore} />}
        </div>
        <div className="col-2">
          <ViewProperties propertyStore={this.props.propertyStore} />
        </div>
      </div>
    )
  }
}
ToolBarItems.propTypes = {
  controlStore: PropTypes.object.isRequired
};