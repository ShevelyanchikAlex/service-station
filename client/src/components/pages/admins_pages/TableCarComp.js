import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'
import DeleteModalComp from './table_components/DeleteModalComp'

const TableCarComp = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [carList, setCarList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [modalText, setModalText] = useState(false);

    //MODALS
    const [show, setShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);

    //fields
    const [number, setNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    //UpdateTableField
    const [updateValue, setUpdateValue] = useState(true);

    useEffect(() => {
        const search = async (path, func) => {
            const {data} = await server.get(path);
            func(data);
        }
        search('/cars', setCarList).then(() => {
            console.log(carList);
        })
    }, [updateValue]);

    const tableHeaders = ['Car_number', 'Brand', 'Model'];
    const tableName = 'car';
    const tableSetters = [setNumber, setBrand, setModel];
    const tableValues = [number, brand, model];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const {data} = await server.post(path, valuesOfInputs);
            // setCarList([...carList, data]);
        }
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
            props.updateAdminsPage();
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    };

    const changeStateOfModal = () => {
        setShow(!show);
    }

    const changeStateOfDeleteModal = () => {
        setModalDeleteShow(!modalDeleteShow);
    }

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const {data} = await server.put(path, valuesOfInputs);
            console.log(typeof (data));
        }
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const deleteItem = () => {
        const addQuery = async (path, func) => {
            const {data} = await server.delete(`${path}/${selectedId}`);
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }
    const renderedItems = carList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.car_number}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
            </tr>
        )
    });

    const objectToArray = (object) => {
        let array1 = [];
        let array2 = [];
        let counter1 = 0;
        let counter2 = 0;
        for (let key in object) {
            if (key != "id") {
                array1[counter1++] = object[key];
            }
            array2[counter2++] = object[key];
        }
        return {
            ar1: array1,
            ar2: array2
        };
    }

    return (
        <div>
            <ModalComp show={show} modalText={modalText} changeStateOfModal={changeStateOfModal}></ModalComp>
            <DeleteModalComp modalDeleteShow={modalDeleteShow} changeStateOfDeleteModal={changeStateOfDeleteModal}
                             deleteItem={deleteItem}></DeleteModalComp>
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

                                console.log("identifier" + identifier);
                                console.log("row " + objectToArray(carList[parent.rowIndex - 1]));

                                let arraysObj = objectToArray(carList[parent.rowIndex - 1]);
                                console.log(arraysObj.ar1)
                                console.log(arraysObj.ar2)

                                setSelectedId(arraysObj.ar2[0]);

                                for (var i = 0; i < parent.children.length; i++) {
                                    tableSetters[i](arraysObj.ar1[i]);
                                }

                                setSelectedIdValues(arraysObj.ar2);


                                // let array = [];
                                // for (var i = 0; i < parent.children.length; i++) {
                                //     array[i] = parent.children[i].innerHTML;

                                //     if (i != 0) {
                                //         tableSetters[i - 1](parent.children[i].innerHTML);
                                //     }
                                // }
                                // setSelectedIdValues(array);
                            }
                        }}>
                            <thead>
                            <tr>
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
                                <AddItem updateValue={props.updateValue} createItem={createItem}
                                         tableHeaders={tableHeaders} tableName={tableName}
                                         setUpdateValue={setUpdateValue}></AddItem>
                            </Col>
                            <Col>
                                {selectedId ? <UpdateItem updateItem={updateItem} tableHeaders={tableHeaders}
                                                          tableName={tableName} selectedId={selectedId}
                                                          selectedIdValues={selectedIdValues}
                                                          tableSetters={tableSetters}
                                                          tableValues={tableValues}></UpdateItem> : ""}
                            </Col>
                        </Row>
                        <Row>
                            {selectedId ?
                                <Card>
                                    <Card.Header>Delete item</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{`Delete auto ${selectedIdValues[2]} [${selectedIdValues[1]}] ?`}</Card.Title>
                                        <Card.Text>
                                            This item will be deleted.
                                        </Card.Text>
                                        <Button variant="primary" onClick={(e) => {
                                            setModalDeleteShow(!modalDeleteShow)
                                        }}>Delete</Button>
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