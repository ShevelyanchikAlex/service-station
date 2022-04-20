import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const ModalComp = (props) => {
    // const [show, setShow] = useState(false);

    const renderedItems = props.modalMessage.map((item, index) => {
        return (
            <p>{item}</p>
        )
    });

    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Update results</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.modalText}</p>
            </Modal.Body>
            <Modal.Body style={props.modalMessage[0] == "No errors" ? { color: "green" } : { color: "red" }}>
                {renderedItems}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={(e) => { props.changeStateOfModal() }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default ModalComp;