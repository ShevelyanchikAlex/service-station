import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const UpdateItem = (props) => {
    const [selectedId, setSelectedId] = useState('');
    const [selectedIdValues, setSelectedIdValues] = useState([]);

    useEffect(() => {
        setSelectedIdValues(props.selectedIdValues);
        setSelectedId(props.selectedId);
    });

    const sendDataToParent = () => {
        let array = {};
        array.id = selectedId;
        for (let i = 0; i < props.tableHeaders.length; i++) {
            console.log(`${props.tableName}${props.tableHeaders[i].toLowerCase()}`)
            let item = document.getElementById(`${props.tableName}${props.tableHeaders[i].toLowerCase()}`);
            let key = props.tableHeaders[i].toString().toLowerCase();
            array[key] = item.value;
        }
        console.log(array)
        return array;
    }

    const renderedLabels = props.tableHeaders.map((item, index) => {
        return (
            <Card.Text key={index}>
                {item}
            </Card.Text>
        )
    });

    const renderedInputs = props.tableHeaders.map((item, index) => {
        return (
            <Form.Control key={index} type="text" id={`${props.tableName}${item.toLowerCase()}`} placeholder={`${props.tableName} ${item}`} value={`${props.tableValues[index]}`} onChange={(e) => { props.tableSetters[index](e.target.value) }}></Form.Control>
        )
    });

    return (
        <Card >
            <Card.Header as="h5">Update item</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        <Card.Text>
                            Id
                        </Card.Text>
                        {renderedLabels}
                    </Col>
                    <Col lg={9}>
                        <Form.Control type="text" id={`${props.tableName}id`} placeholder={`${props.tableName} Id`} value={selectedId} disabled></Form.Control>
                        {renderedInputs}
                    </Col>
                </Row>
                <br></br>
                <Button variant="primary" onClick={() => {
                    console.log("did it");
                    let valuesOfInputs = sendDataToParent();
                    props.updateItem(valuesOfInputs);
                }}>Update item</Button>
            </Card.Body>
        </Card>
    )
}

export default UpdateItem;