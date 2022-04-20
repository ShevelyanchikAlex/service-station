import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import DropdownComp from './DropdownComp'
import DefaultDropdownComp from './DefaultDropdownComp'
import MultiSelectDropdown from "./MultiSelectDropdown";

const UpdateItem = (props) => {
    const [selectedId, setSelectedId] = useState('');
    const [selectedIdValues, setSelectedIdValues] = useState([]);

    const [selectedOptions, setSelectedOptions] = useState({});
    const handleSelectingOptions = (key, options) => {
        selectedOptions[key] = options;
    };

    useEffect(() => {
        setSelectedIdValues(props.selectedIdValues);
        setSelectedId(props.selectedId);
    });

    const sendDataToParent = () => {
        let array = {};
        array.id = selectedId.toString();
        for (let i = 0; i < props.tableHeaders.length; i++) {
            //console.log(`${props.tableName}${props.tableHeaders[i].toLowerCase()}`
            let item = document.getElementById(`${props.tableName}${props.tableHeaders[i].toLowerCase()}`);
            let key = props.tableHeaders[i].toString().toLowerCase();
            //console.log("item value is ----------------" + item.value);
            //Раскомментировать это для передачи айдишников интами
            // if (key.indexOf("_id") !== -1) {
            //     array[key] = parseInt(item.value);
            // } else {
            if (item.nodeName == "INPUT" || item.nodeName == "SELECT") {
                array[key] = item.value;
            } else {
                let ids = []
                if (selectedOptions[`${props.tableName}${props.tableHeaders[i].toLowerCase()}`] != undefined) {
                    selectedOptions[`${props.tableName}${props.tableHeaders[i].toLowerCase()}`].forEach(option => {
                        ids.push(option.value);
                    })
                }
                array[key] = ids;
                console.log(array[key]);
            }
            // }
        }
        //console.log(array)
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
        if (item == "Services") {
            selectedOptions[`${props.tableName}${item}`.toLowerCase()] = props.selectedItem.services.map(service => {
                return {
                    value: service.id,
                    label: service.name,
                }
            })
            return (
                <MultiSelectDropdown key={index} selectedOptions={selectedOptions[`${props.tableName}${item}`.toLowerCase()]}
                    onSelect={handleSelectingOptions} updateValue={props.updateValue}
                    path={"/services"} name={"name"} id={`${props.tableName}${item}`.toLowerCase()} />
            )
        }
        if (item == "Details") {
            selectedOptions[`${props.tableName}${item}`.toLowerCase()] = props.selectedItem.details.map(detail => {
                return {
                    value: detail.id,
                    label: detail.name,
                }
            })
            return (
                <MultiSelectDropdown key={index} selectedOptions={selectedOptions[`${props.tableName}${item}`.toLowerCase()]}
                    onSelect={handleSelectingOptions}
                    updateValue={props.updateValue} path={"/details"} name={"name"}
                    id={`${props.tableName}${item}`.toLowerCase()} />
            )
        }
        if (item == "Manufacturer_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/manufactors"} name={"name"}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Service_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/services"} name={"name"}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Employee_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/employees"} name={"name"} secName={'last_name'}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Car_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/cars"} name={"brand"} secName={'car_number'}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Job_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/jobs"} name={"status"} secName={'end_date'}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Order_id") {
            return (
                <DropdownComp key={index} updateValue={props.updateValue} path={"/orders"} name={"status"} secName={'created_at'}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DropdownComp>
            )
        }
        if (item == "Status") {
            if (props.tableHeaders[index + 1] == "Start_date") {
                return (
                    <DefaultDropdownComp key={index} defaultList={["PENDING", "IN_PROGRESS", "COMPLETED"]}
                        id={`${props.tableName}${item.toLowerCase()}`}
                        value={`${props.tableValues[index]}`}></DefaultDropdownComp>
                )
            }
        }
        if (item == "Status") {
            if (props.tableHeaders[index + 1] == "Created_at") {
                return (
                    <DefaultDropdownComp key={index} defaultList={["NEW", "IN_PROGRESS", "COMPLETED", "CANCELED", "CONFIRMED"]}
                        id={`${props.tableName}${item.toLowerCase()}`}
                        value={`${props.tableValues[index]}`}></DefaultDropdownComp>
                )
            }
        }
        if (item == "Role") {
            return (
                <DefaultDropdownComp key={index} defaultList={["MANAGER", "DIRECTOR", "MASTER"]}
                    id={`${props.tableName}${item.toLowerCase()}`}
                    value={`${props.tableValues[index]}`}></DefaultDropdownComp>
            )
        }
        //Раскомментировать это для выпадающего календаря
        if (item == "End_date" || item == "Start_date" || item == "Birth_date" || item == "Start_working_date" || item == "Created_at" || item == "Completed_at") {
            return (
                <Form.Control key={index} type="datetime-local" id={`${props.tableName}${item.toLowerCase()}`}
                    placeholder={`${props.tableName} ${item}`} value={`${props.tableValues[index]}`} />
            )
        }
        return (
            <Form.Control key={index} type="text" id={`${props.tableName}${item.toLowerCase()}`}
                placeholder={`${props.tableName} ${item}`} value={`${props.tableValues[index]}`}
                onChange={(e) => {
                    props.tableSetters[index](e.target.value)
                }} />
        )
    });

    return (
        <Card>
            <Card.Header as="h5">Update item</Card.Header>
            <Card.Body>
                <Row>
                    <Col lg={3}>
                        {/*<Card.Text>*/}
                        {/*    Id*/}
                        {/*</Card.Text>*/}
                        {renderedLabels}
                    </Col>
                    <Col lg={9}>
                        {/*<Form.Control type="text" id={`${props.tableName}id`} placeholder={`${props.tableName} Id`} value={selectedId} disabled></Form.Control>*/}
                        {renderedInputs}
                    </Col>
                </Row>
                <br></br>
                <Button variant="primary" onClick={() => {

                    let valuesOfInputs = sendDataToParent();
                    props.updateItem(valuesOfInputs);
                }}>Update item</Button>
            </Card.Body>
        </Card>
    )
}

export default UpdateItem;