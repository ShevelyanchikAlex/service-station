import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row, Table} from 'react-bootstrap';
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

    const [modalMessage, setModalMessage] = useState([]);
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
            const {data} = await server.get(path, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
            func(data);
        }
        search('/cars', setCarList).then(() => {

        })
    }, [updateValue]);

    const tableHeaders = ['Car_number', 'Brand', 'Model'];
    const tableName = 'car';
    const tableSetters = [setNumber, setBrand, setModel];
    const tableValues = [number, brand, model];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const {data} = await server.post(path, valuesOfInputs, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
            setCarList([...carList, data]);
        }
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
            props.updateAdminsPage();
            setModalMessage(["No errors"])
        }).catch((err) => {
            if (err.response.status == 401 || err.response.status == 403) {
                setModalMessage(["You don't have enough rights"])
            } else {
                setModalMessage(err.response.data.message)
            }
            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
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
            const {data} = await server.put(path, valuesOfInputs, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
            setModalMessage(["No errors"])
        }).catch((err) => {
            if (err.response.status == 401 || err.response.status == 403) {
                setModalMessage(["You don't have enough rights"])
            } else {
                setModalMessage(err.response.data.message)
            }
            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
        })
    }

    const deleteItem = () => {
        const addQuery = async (path, func) => {
            const {data} = await server.delete(`${path}/${selectedId}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/cars').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully.");
            setModalMessage(["No errors"])
        }).catch((err) => {
            if (err.response.status == 401 || err.response.status == 403) {
                setModalMessage(["You don't have enough rights"])
            } else {
                setModalMessage(err.response.data.message)
            }
            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
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
            <ModalComp show={show} modalMessage={modalMessage} modalText={modalText}
                       changeStateOfModal={changeStateOfModal}></ModalComp>
            <DeleteModalComp modalDeleteShow={modalDeleteShow} changeStateOfDeleteModal={changeStateOfDeleteModal}
                             deleteItem={deleteItem}></DeleteModalComp>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;

                            if (target.tagName != 'TD') {

                            } else {
                                const parent = target.parentElement;
                                const identifier = parent.firstChild.innerHTML;

                                let arraysObj = objectToArray(carList[parent.rowIndex - 1]);

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