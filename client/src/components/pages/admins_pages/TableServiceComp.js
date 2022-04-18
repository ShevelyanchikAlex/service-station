import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'
import DeleteModalComp from './table_components/DeleteModalComp'

const TableServiceComp = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [serviceList, setServiceList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [modalText, setModalText] = useState(false);

    //MODALS
    const [show, setShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);

    //UpdateTableField
    const [updateValue, setUpdateValue] = useState(true);

    //fields
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [warranty, setWarranty] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {

        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
        }

        search('/services', setServiceList);
    }, [updateValue]);


    const tableHeaders = ['Name', 'Price', 'Warranty', 'Description', 'Duration'];
    const tableName = 'service';
    const tableSetters = [setName, setPrice, setWarranty, setDescription, setDuration];
    const tableValues = [name, price, warranty, description, duration];

    const serviceFields = ['Name', 'Price', 'Warranty', 'Description', 'Duration', 'Details']

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs)
            setServiceList([...serviceList, data]);
            // func(data);
        }
        addQuery('/services').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
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
        console.log(valuesOfInputs);
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(data);
        }
        addQuery('/services').then(() => {
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
            const { data } = await server.delete(`${path}/${selectedId}`);
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/services').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const renderedItems = serviceList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.warranty}</td>
                <td>{item.description}</td>
                <td>{item.duration}</td>
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
            <ModalComp show={show} modalText={modalText} changeStateOfModal={changeStateOfModal}/>
            <DeleteModalComp modalDeleteShow={modalDeleteShow} changeStateOfDeleteModal={changeStateOfDeleteModal} deleteItem={deleteItem}/>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;

                            if (target.tagName != 'TD') {
                                console.log("not td")
                            } else {
                                // const parent = target.parentElement;
                                // const identifier = parent.firstChild.innerHTML;

                                // setSelectedId(identifier);

                                // let array = [];
                                // for (var i = 0; i < parent.children.length; i++) {
                                //     array[i] = parent.children[i].innerHTML;

                                //     if (i != 0) {
                                //         tableSetters[i - 1](parent.children[i].innerHTML);
                                //     }
                                // }
                                // setSelectedIdValues(array);

                                const parent = target.parentElement;
                                const identifier = parent.firstChild.innerHTML;

                                let arraysObj = objectToArray(serviceList[parent.rowIndex - 1]);

                                setSelectedId(arraysObj.ar2[0]);
                                for (var i = 0; i < parent.children.length; i++) {
                                    tableSetters[i](arraysObj.ar1[i]);
                                }

                                setSelectedIdValues(arraysObj.ar2);
                                setSelectedItem(serviceList[parent.rowIndex - 1]);
                            }
                        }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Warranty</th>
                                    <th>Description</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderedItems}
                            </tbody>
                        </Table>
                        <br></br>
                        <Row>
                            <Col>
                                <AddItem updateValue={props.updateValue} createItem={createItem} tableHeaders={serviceFields} tableName={tableName}/>
                            </Col>
                            <Col>
                                {selectedId ? <UpdateItem selectedItem={selectedItem} updateItem={updateItem} tableHeaders={serviceFields} tableName={tableName} selectedId={selectedId} selectedIdValues={selectedIdValues} tableSetters={tableSetters} tableValues={tableValues}/> : ""}
                            </Col>
                        </Row>
                        <Row>
                            {selectedId ?
                                <Card>
                                    <Card.Header>Delete item</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{`Delete service ${selectedIdValues[1]} with end_date ${selectedIdValues[5]}?`}</Card.Title>
                                        <Card.Text>
                                            This item will be deleted.
                                        </Card.Text>
                                        <Button variant="primary" onClick={(e) => { setModalDeleteShow(!modalDeleteShow) }}>Delete</Button>
                                    </Card.Body>
                                </Card> : ""}
                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default TableServiceComp;