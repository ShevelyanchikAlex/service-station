import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const ModalComp = (props) => {
    // const [show, setShow] = useState(false);

    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>Update results</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.modalText}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={(e) => { props.changeStateOfModal() }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default ModalComp;