import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const DeleteModalComp = (props) => {
    // const [show, setShow] = useState(false);

    return (
        <Modal show={props.modalDeleteShow}>
            <Modal.Header closeButton>
                <Modal.Title>Deletion</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p> Are you sure you want to delete this item?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={(e) => { props.changeStateOfDeleteModal() }}>Cancel</Button>
                <Button variant="danger" onClick={(e) => { props.changeStateOfDeleteModal(); props.deleteItem() }}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default DeleteModalComp;