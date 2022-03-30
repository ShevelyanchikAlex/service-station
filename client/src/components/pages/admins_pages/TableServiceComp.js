import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'


// const TableServiceComp = ({ serviceList }) => {
const TableServiceComp = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [serviceList, setServiceList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState(false);

    //fields
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [warranty, setWarranty] = useState('');
    const [description, setDescription] = useState('');
    const [end_date, setEndDate] = useState('');
    const [job_id, setJobId] = useState('');
    const [orderId, setOrderId] = useState('');

    useEffect(() => {

        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
        }

        search('/services', setServiceList);
    }, []);


    const tableHeaders = ['Name', 'Price', 'Warranty', 'Description', 'End_date', 'Job_id', 'OrderId'];
    const tableName = 'service';
    const tableSetters = [setName, setPrice, setWarranty, setDescription, setEndDate, setJobId, setOrderId];
    const tableValues = [name, price, warranty, description, end_date, job_id, orderId];



    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs)
            setServiceList([...serviceList, data]);
            // func(data);
        }
        addQuery('/services');
    };


    const changeStateOfModal = () => {
        setShow(!show);
    }

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(typeof (data));
        }
        addQuery('/services').then(() => {
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
        addQuery('/services').then(() => {
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const renderedItems = serviceList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.warranty}</td>
                <td>{item.description}</td>
                <td>{item.end_date.toString()}</td>
                <td>{item.job_id}</td>
                <td>{item.orderId}</td>
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
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Warranty</th>
                                    <th>Description</th>
                                    <th>End_date</th>
                                    <th>Job_id</th>
                                    <th>Order_id</th>
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
                                {selectedId ? <UpdateItem createItem={updateItem} tableHeaders={tableHeaders} tableName={tableName} selectedId={selectedId} selectedIdValues={selectedIdValues} tableSetters={tableSetters} tableValues={tableValues}></UpdateItem> : ""}
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
            </Container >
        </div >
    )
}

export default TableServiceComp;