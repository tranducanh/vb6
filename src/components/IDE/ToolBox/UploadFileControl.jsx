import React from 'react';
import { Icon } from 'react-icons-kit'
import {folderUpload} from 'react-icons-kit/icomoon/folderUpload'
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { DragDropContainer } from 'react-drag-drop-container';

@observer
export default class UploadFileControl extends React.Component { 
  styles = { fontSize: 32, fontWeight: 'bold', margin: 20, cursor: 'pointer' }; 
  constructor(props) {
    super(props);    
  }
  handleDrop() {    
    this.props.controlStore.addControl(this.props.label);
  }

  render() {
    return (
      <div>      
        <DragDropContainer                   
                    dragData={{ label: this.props.label }}
                    customDragElement={this.props.customDragElement}
                    onDragStart={() => (console.log('start'))}
                    onDrag={() => (console.log('dragging'))}
                    onDragEnd={() => (this.handleDrop())}
                    onDrop={(e) => (console.log(e))}                   
                >
               <div style={{ color: '#2A9D8F' }}>                  
                <Icon size={64} icon={folderUpload}  />
               </div> 
        </DragDropContainer>
      </div>
    )
  }
}

UploadFileControl.propTypes = {
  controlStore: PropTypes.object.isRequired
};


