import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Icon } from 'react-icons-kit'
import { fileTextO } from 'react-icons-kit/fa/fileTextO'
import { DragDropContainer } from 'react-drag-drop-container';
@observer
export default class TextBoxControl extends React.Component { 
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
                <Icon size={64} icon={fileTextO}  />
               </div> 
        </DragDropContainer>
      </div>
    )
  }
}

TextBoxControl.propTypes = {
  controlStore: PropTypes.object.isRequired
};

