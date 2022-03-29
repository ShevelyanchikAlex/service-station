import React from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const AddItem = (props) => {

    const renderedLabels = props.tableHeaders.map((item, index) => {
        return (
            <Card.Text>
                {item}
            </Card.Text>
        )
    });

    const renderedInputs = props.tableHeaders.map((item, index) => {
        return (
            <Form.Control type="text" id={`${props.tableName}${item}`} placeholder={`${props.tableName} ${item}`} />
        )
    });

    const sendDataToParent = () => {
        let array = {};
        for (let i = 0; i < props.tableHeaders.length; i++) {
            let item = document.getElementById(`${props.tableName}${props.tableHeaders[i]}`);
            let key = props.tableHeaders[i].toString().toLowerCase();
            array[key] = item.value;
        }
        console.log(array)
        return array;
    }

    return (
        <Card >
            <Card.Header as="h5">Add item</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        {renderedLabels}
                    </Col>
                    <Col lg={9}>
                        {renderedInputs}
                    </Col>
                </Row>
                <br></br>
                <Button variant="primary" onClick={() => {
                    console.log("did it");
                    let valuesOfInputs = sendDataToParent();
                    props.createItem(valuesOfInputs);
                }}>Add item</Button>
            </Card.Body>
        </Card>
    )
}

export default AddItem;