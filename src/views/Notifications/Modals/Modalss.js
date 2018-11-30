import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ModalComp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            success: false
        }

        this.toggleSuccess = this.toggleSuccess.bind(this);
    }
    
    toggleSuccess() {
        this.setState({
            success: !this.state.success,
        });
    }
    render() {
        return (
            <div>
            <Button color="success" onClick={this.toggleSuccess} className="mr-1">Success modal</Button>

        <Modal isOpen={this.state.success} toggle={this.toggleSuccess} className={'modal-success ' + this.props.className}>
        <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>

      
      )
    }    
}

export default ModalComp;