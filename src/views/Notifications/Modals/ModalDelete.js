import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'


class ModalDelete extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            danger: false
        }
    

    this.toggleDanger = this.toggleDanger.bind(this);

    }

    toggleDanger() {
        this.setState({
          danger: !this.state.danger,
        });
      }

    render() {
        return(
            <div>
            <Button color="danger" onClick={this.toggleDanger} className="mr-1"><i className="fa fa-close fa-lg"></i>
            </Button>

            <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
            className={'modal-danger ' + this.props.className}>
            <ModalHeader toggle={this.toggleDanger}>Modal title</ModalHeader>
            <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Button color="danger" onClick={this.toggleDanger}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
            </ModalFooter>
            </Modal>
            </div>
        )
    }
}

export default ModalDelete;
