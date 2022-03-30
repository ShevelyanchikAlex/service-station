import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'

const TableEmployeeComp = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState(false);

    //fields
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birth_date, setBirthDate] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [work_book_id, setWorkBookId] = useState('');
    const [salary, setSalary] = useState('');
    const [start_working_date, setStartWorkingDate] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const search = async (path, func) => {
            const { data } = await server.get(path);
            func(data);
        }
        search('/employees', setEmployeeList);
    }, []);

    const tableHeaders = ['Name', 'Last_name', 'Email', 'Password', 'Birth_date', 'Speciality', 'Work_book_id', 'Salary', 'Start_working_date', 'Role'];
    const tableName = 'employee';
    const tableSetters = [setName, setLastName, setEmail, setPassword, setBirthDate, setSpeciality, setWorkBookId, setSalary, setStartWorkingDate, setRole];
    const tableValues = [name, last_name, email, password, birth_date, speciality, work_book_id, salary, start_working_date, role];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs);
            setEmployeeList([...employeeList, data]);
        }
        addQuery('/employees');
    };


    const changeStateOfModal = () => {
        setShow(!show);
    }

    const updateItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.put(path, valuesOfInputs);
            console.log(typeof (data));
        }
        addQuery('/employees').then(() => {
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
        addQuery('/employees').then(() => {
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully. Refresh page to see the new data.");
        }).catch(() => {
            changeStateOfModal();
            setModalText("Error! Can't make query. Try again.");
        })
    }

    const renderedItems = employeeList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.birth_date}</td>
                <td>{item.speciality}</td>
                <td>{item.work_book_id}</td>
                <td>{item.salary}</td>
                <td>{item.start_working_date}</td>
                <td>{item.role}</td>
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
                                    <th>Last_name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Birth_date</th>
                                    <th>Speciality</th>
                                    <th>Work_book_id</th>
                                    <th>Salary</th>
                                    <th>Start_working_date</th>
                                    <th>Role</th>
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

export default TableEmployeeComp;