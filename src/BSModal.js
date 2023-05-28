import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Draggable from 'react-draggable';
import ModalDialog from 'react-bootstrap/ModalDialog';

class DraggableModalDialog extends React.Component {
	render() {
		return <Draggable handle=".modal-title"><ModalDialog {...this.props} /></Draggable>
	}
}

export default class BSModal extends Component {

	render() {
		return (
			<Modal
					dialogAs={DraggableModalDialog} 
					show={this.props.show} 
				 	onHide={this.props.close}
					backdrop = 'static'
    				//keyboard = {false}	
				>
				<Modal.Header>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.children}
				</Modal.Body>
				<Modal.Footer >
				</Modal.Footer>
			</Modal>
		);
	}
}