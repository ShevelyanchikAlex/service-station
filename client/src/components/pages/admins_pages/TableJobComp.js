import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'

const TableJobComp = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [jobList, setJobList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState(false);


    //UpdateTableField
    const [updateValue, setUpdateValue] = useState(true);

    //fields
    const [status, setStatus] = useState('');
    const [end_date, setEndDate] = useState('');
    const [employee_id, setEmployeeId] = useState('');

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
        }
        search('/jobs', setJobList);
    }, [updateValue]);

    const tableHeaders = ['Status', 'End_date', 'Employee_id'];
    const tableName = 'job';
    const tableSetters = [setStatus, setEndDate, setEmployeeId];
    const tableValues = [status, end_date, employee_id];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs);
            setJobList([...jobList, data]);
        }
        addQuery('/jobs').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    };

    const changeStateOfModal = () => {
        setShow(!show);
    }

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(typeof (data));
        }
        addQuery('/jobs').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const deleteItem = () => {
        const addQuery = async (path, func) => {
            const { data } = await server.delete(`${path}/${selectedId}`);
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/jobs').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }
    const renderedItems = jobList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.status}</td>
                <td>{item.end_date}</td>
                <td>{item.employee_id}</td>
            </tr>
        )
    });

    return (
        <div>
            <ModalComp show={show} modalText={modalText} changeStateOfModal={changeStateOfModal}></ModalComp>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;

                            if (target.tagName != 'TD') {
                                console.log("not td")
                            } else {
                                const parent = target.parentElement;
                                const identifier = parent.firstChild.innerHTML;
                                setSelectedId(identifier);

                                let array = [];
                                for (var i = 0; i < parent.children.length; i++) {
                                    array[i] = parent.children[i].innerHTML;

                                    if (i != 0) {
                                        tableSetters[i - 1](parent.children[i].innerHTML);
                                    }
                                }
                                setSelectedIdValues(array);
                            }
                        }}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Status</th>
                                    <th>End_date</th>
                                    <th>Employee_id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderedItems}
                            </tbody>
                        </Table>
                        <br></br>
                        <Row>
                            <Col>
                                <AddItem updateValue={props.updateValue} createItem={createItem} tableHeaders={tableHeaders} tableName={tableName}></AddItem>
                            </Col>
                            <Col>
                                {selectedId ? <UpdateItem updateItem={updateItem} tableHeaders={tableHeaders} tableName={tableName} selectedId={selectedId} selectedIdValues={selectedIdValues} tableSetters={tableSetters} tableValues={tableValues}></UpdateItem> : ""}
                            </Col>
                        </Row>
                        <Row>
                            {selectedId ?
                                <Card>
                                    <Card.Header>Delete item</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{`Delete item with id  = ${selectedId}?`}</Card.Title>
                                        <Card.Text>
                                            This item will be deleted.
                                        </Card.Text>
                                        <Button variant="primary" onClick={(e) => { deleteItem() }}>Delete</Button>
                                    </Card.Body>
                                </Card> : ""}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TableJobComp;