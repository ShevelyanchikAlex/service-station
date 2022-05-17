import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row, Table} from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'
import DeleteModalComp from './table_components/DeleteModalComp'
import '../../../styles/style.css'

const TableServiceComp = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [serviceList, setServiceList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [modalText, setModalText] = useState(false);

    const [highlight, setHighlight] = useState(null)

    const [modalMessage, setModalMessage] = useState([]);
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
            const { data } = await server.get(path, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
            func(data);
        }

        search('/services', setServiceList);
    }, [updateValue, highlight]);


    const tableHeaders = ['Name', 'Price', 'Warranty', 'Description', 'Duration'];
    const tableName = 'service';
    const tableSetters = [setName, setPrice, setWarranty, setDescription, setDuration];
    const tableValues = [name, price, warranty, description, duration];

    const serviceFields = ['Name', 'Price', 'Warranty', 'Description', 'Duration', 'Details']

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            })
            setServiceList([...serviceList, data]);
            // func(data);
        }
        addQuery('/services').then(() => {
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
    };


    const changeStateOfModal = () => {
        setShow(!show);
    }


    const changeStateOfDeleteModal = () => {
        setModalDeleteShow(!modalDeleteShow);
    }

    const updateItem = (valuesOfInputs) => {

        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });

        }
        addQuery('/services').then(() => {
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
            const { data } = await server.delete(`${path}/${selectedId}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/services').then(() => {
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

    const setActive = (target) => {
        target.classList.add('active');
    }

    return (
        <div>
            <ModalComp show={show} modalText={modalText} modalMessage={modalMessage} changeStateOfModal={changeStateOfModal} />
            <DeleteModalComp modalDeleteShow={modalDeleteShow} changeStateOfDeleteModal={changeStateOfDeleteModal} deleteItem={deleteItem} />
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;



                            if (target.tagName != 'TD') {

                            } else {
                                // if (highlight !== null) {

                                //     console.log(highlight)
                                //     highlight.classList.remove('active');
                                //     // highlight.style.background = "white";
                                //     // setHighlight(target.parentNode);
                                //     // // console.log(typeof parentNode);
                                //     // highlight.style.background = "red";

                                //     setHighlight(target.parentNode);
                                //     highlight.classList.add('active');
                                // } else {
                                //     console.log("add cl for bull")
                                //     console.log(target.parentNode)
                                //     setHighlight(target.parentNode);
                                //     console.log(highlight)
                                //     setActive(highlight);
                                // }
                                // // setHighlight(target.parentNode);
                                // // // console.log(typeof parentNode);
                                // // highlight.style.background = "red";

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
                                <AddItem updateValue={props.updateValue} createItem={createItem} tableHeaders={serviceFields} tableName={tableName} />
                            </Col>
                            <Col>
                                {selectedId ? <UpdateItem selectedItem={selectedItem} updateItem={updateItem} tableHeaders={serviceFields} tableName={tableName} selectedId={selectedId} selectedIdValues={selectedIdValues} tableSetters={tableSetters} tableValues={tableValues} /> : ""}
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