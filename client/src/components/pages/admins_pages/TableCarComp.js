import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'

const TableCarComp = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [carList, setCarList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);

    //fields
    const [number, setNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            console.log(data);
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
            console.log(data);
            setCarList([...carList, data]);
        }
        addQuery('/cars');
    };

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(data);
        }
        addQuery('/cars');
    }

    const deleteItem = () => {
        const addQuery = async (path, func) => {
            const { data } = await server.delete(`${path}/${selectedId}`);
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        console.log(selectedId)
        addQuery('/cars');
    }

    const renderedItems = carList.map((item, index) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.car_number}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
            </tr>
        )
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;
                            console.log(target);

                            if (target.tagName != 'TD') {
                                console.log("not td")
                            } else {
                                const parent = target.parentElement;
                                const identifier = parent.firstChild.innerHTML;
                                console.log(parent);
                                setSelectedId(identifier);

                                let array = [];
                                for (var i = 0; i < parent.children.length; i++) {
                                    array[i] = parent.children[i].innerHTML;

                                    if (i != 0) {
                                        tableSetters[i - 1](parent.children[i].innerHTML);
                                    }
                                }
                                console.log(array);
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
                            <Card>
                                <Card.Header>Delete item</Card.Header>
                                <Card.Body>
                                    <Card.Title>{`Delete item with id  = ${selectedId}?`}</Card.Title>
                                    <Card.Text>
                                        This item will be deleted.
                                    </Card.Text>
                                    <Button variant="primary" onClick={(e) => { deleteItem() }}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TableCarComp;