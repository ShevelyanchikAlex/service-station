import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import DropdownComp from './DropdownComp'

const AddItem = (props) => {
    const [changesCounter, setChangesCounter] = useState(0);

    const renderedLabels = props.tableHeaders.map((item, index) => {
        return (
            <Card.Text key={index}>
                {item}
            </Card.Text>
        )
    });

    const renderedInputs = props.tableHeaders.map((item, index) => {
        if (item == "Manufacturer_id") {
            return (
                <DropdownComp path={"/manufactors"} name={"name"} id={`${props.tableName}${item}`} changesCounter={setChangesCounter}></DropdownComp>
            )
        }
        if (item == "Service_id") {
            return (
                <DropdownComp path={"/services"} name={"name"} id={`${props.tableName}${item}`} changesCounter={setChangesCounter}></DropdownComp>
            )
        }
        if (item == "Employee_id") {
            return (
                <DropdownComp path={"/employees"} name={"name"} secName={'last_name'} id={`${props.tableName}${item}`} changesCounter={setChangesCounter}></DropdownComp>
            )
        }
        if (item == "Car_id") {
            return (
                <DropdownComp path={"/cars"} name={"brand"} secName={'car_number'} id={`${props.tableName}${item}`} changesCounter={setChangesCounter}></DropdownComp>
            )
        }
        if (item == "Manufacturer_id") {
            return (
                <DropdownComp path={"/manufactors"}></DropdownComp>
            )
        }
        return (
            <Form.Control key={index} type="text" id={`${props.tableName}${item}`} placeholder={`${props.tableName} ${item}`} />
        )
    });

    const sendDataToParent = () => {
        let array = {};
        for (let i = 0; i < props.tableHeaders.length; i++) {
            console.log(`${props.tableName}${props.tableHeaders[i]}`);
            let item = document.getElementById(`${props.tableName}${props.tableHeaders[i]}`);
            console.log(item);
            let key = props.tableHeaders[i].toString().toLowerCase();
            console.log(key)
            console.log(item.value);
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
                    setChangesCounter(changesCounter + 1);
                    props.createItem(valuesOfInputs);
                }}>Add item</Button>
            </Card.Body>
        </Card>
    )
}

export default AddItem;