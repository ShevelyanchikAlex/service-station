import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'

const TableCarComp = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [carList, setCarList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState(false);

    //fields
    const [number, setNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
        }
        search('/cars', setCarList);
    }, []);

    const tableHeaders = ['Car_number', 'Brand', 'Model'];
    const tableName = 'car';
    const tableSetters = [setNumber, setBrand, setModel];
    const tableValues = [number, brand, model];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs);
            setCarList([...carList, data]);
        }
        addQuery('/cars');
    };

    const changeStateOfModal = () => {
        setShow(!show);
    }

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(typeof (data));
        }
        addQuery('/cars').then(() => {
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
        addQuery('/cars').then(() => {
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const renderedItems = carList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.car_number}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
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
                                    <th>Car number</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderedItems}
                            </tbody>
                        </Table>
                        <br></br>
                        <Row>
                            <Col>
                                <AddItem createItem={createItem} tableHeaders={tableHeaders} tableName={tableName}></AddItem>
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

export default TableCarComp;