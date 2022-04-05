import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import DropdownComp from './DropdownComp'
import DefaultDropdownComp from './DefaultDropdownComp'

const AddItem = (props) => {

    //UpdateTableField
    const [updateValue, setUpdateValue] = useState(true);

    // console.log("rerender add item");

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
                <DropdownComp updateValue={props.updateValue} path={"/manufactors"} name={"name"} id={`${props.tableName}${item}`}></DropdownComp>
            )
        }
        if (item == "Service_id") {
            return (
                <DropdownComp updateValue={props.updateValue} path={"/services"} name={"name"} id={`${props.tableName}${item}`}></DropdownComp>
            )
        }
        if (item == "Employee_id") {
            return (
                <DropdownComp updateValue={props.updateValue} path={"/employees"} name={"name"} secName={'last_name'} id={`${props.tableName}${item}`} ></DropdownComp>
            )
        }
        if (item == "Car_id") {
            return (
                <DropdownComp updateValue={props.updateValue} path={"/cars"} name={"brand"} secName={'car_number'} id={`${props.tableName}${item}`} ></DropdownComp>
            )
        }
        if (item == "Job_id") {
            return (
                <DropdownComp updateValue={props.updateValue} path={"/jobs"} name={"status"} secName={'end_date'} id={`${props.tableName}${item}`} ></DropdownComp>
            )
        }
        if (item == "Order_id") {
            return (
                <DropdownComp updateValue={props.updateValue} path={"/orders"} name={"status"} secName={'created_at'} id={`${props.tableName}${item}`} ></DropdownComp>
            )
        }
        if (item == "Status") {
            if (props.tableHeaders[index + 1] == "Created_at") {
                return (
                    <DefaultDropdownComp defaultList={["NEW", "IN_PROGRESS", "COMPLETED", "CANCELED", "CONFIRMED"]} id={`${props.tableName}${item}`} ></DefaultDropdownComp>
                )
            }
        }
        if (item == "Status") {
            if (props.tableHeaders[index + 1] == "End_date") {
                return (
                    <DefaultDropdownComp defaultList={["PENDING", "IN_PROGRESS", "COMPLETED"]} id={`${props.tableName}${item}`} ></DefaultDropdownComp>
                )
            }
        }
        if (item == "Role") {
            return (
                <DefaultDropdownComp defaultList={["MANAGER", "DIRECTOR", "MASTER"]} id={`${props.tableName}${item}`} ></DefaultDropdownComp>
            )
        }
        // if (item == "End_date" || item == "Birth_date" || item == "Start_working_date" || item == "Created_at" || item == "Compleation_at") {
        //     return (
        //         <Form.Control key={index} type="datetime-local" id={`${props.tableName}${item}`} placeholder={`${props.tableName} ${item}`} />
        //     )
        // }
        return (
            <Form.Control key={index} type="text" id={`${props.tableName}${item}`} placeholder={`${props.tableName} ${item}`} />
        )
    });

    const sendDataToParent = () => {
        let array = {};
        for (let i = 0; i < props.tableHeaders.length; i++) {
            // console.log(`${props.tableName}${props.tableHeaders[i]}`);
            let item = document.getElementById(`${props.tableName}${props.tableHeaders[i]}`);
            // console.log(item);
            let key = props.tableHeaders[i].toString().toLowerCase();
            // console.log(key)
            // console.log(item.value);
            array[key] = item.value;
        }
        // console.log(array)
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
                    // console.log("did it");
                    let valuesOfInputs = sendDataToParent();
                    // setUpdateValue(!updateValue);
                    props.createItem(valuesOfInputs);
                }}>Add item</Button>
            </Card.Body>
        </Card>
    )
}

export default AddItem;