import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'
import ModalComp from './table_components/ModalComp'
import DeleteModalComp from './table_components/DeleteModalComp'

const TableEmployeeComp = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [employeeList, setEmployeeList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);
    const [modalText, setModalText] = useState(false);

    const [modalMessage, setModalMessage] = useState([]);

    //MODALS
    const [show, setShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);

    //UpdateTableField
    const [updateValue, setUpdateValue] = useState(true);

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
    }, [updateValue]);

    const tableHeaders = ['Name', 'Last_name', 'Email', 'Password', 'Birth_date', 'Speciality', 'Work_book_id', 'Salary', 'Start_working_date', 'Role'];
    const tableName = 'employee';
    const tableSetters = [setName, setLastName, setEmail, setPassword, setBirthDate, setSpeciality, setWorkBookId, setSalary, setStartWorkingDate, setRole];
    const tableValues = [name, last_name, email, password, birth_date, speciality, work_book_id, salary, start_working_date, role];

    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, valuesOfInputs);
            setEmployeeList([...employeeList, data]);
        }
        addQuery('/employees').then(() => {
            setUpdateValue(!updateValue);
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
            props.updateAdminsPage();
            setModalMessage(["No errors"])
        }).catch((err) => {


            setModalMessage(err.response.data.message)

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
            const { data } = await server.put(path, valuesOfInputs);

        }
        addQuery('/employees').then((response) => {

            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Data was updated successfully.");
            setModalMessage(["No errors"])
        }).catch((err) => {


            setModalMessage(err.response.data.message)

            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
        })
    }

    const deleteItem = () => {
        const addQuery = async (path, func) => {
            const { data } = await server.delete(`${path}/${selectedId}`);
        }
        //ДОБАВИТЬ УДАЛЕНИЕ ИЗ ТАБЛИЦЫ
        addQuery('/employees').then(() => {
            setUpdateValue(!updateValue);
            props.updateAdminsPage();
            changeStateOfModal();
            setModalText("Success! Item was deleted successfully.");
            setModalMessage(["No errors"])
        }).catch((err) => {


            setModalMessage(err.response.data.message)

            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
        })
    }

    const renderedItems = employeeList.map((item, index) => {
        return (
            <tr key={index}>
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
            <ModalComp show={show} modalText={modalText} modalMessage={modalMessage} changeStateOfModal={changeStateOfModal}></ModalComp>
            <DeleteModalComp modalDeleteShow={modalDeleteShow} changeStateOfDeleteModal={changeStateOfDeleteModal} deleteItem={deleteItem}></DeleteModalComp>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" onClick={(e) => {
                            let target = e.target;

                            if (target.tagName != 'TD') {

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


                                let arraysObj = objectToArray(employeeList[parent.rowIndex - 1]);


                                setSelectedId(arraysObj.ar2[0]);

                                for (var i = 0; i < parent.children.length; i++) {
                                    tableSetters[i](arraysObj.ar1[i]);
                                }

                                setSelectedIdValues(arraysObj.ar2);
                            }
                        }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Birth date</th>
                                    <th>Speciality</th>
                                    <th>Work book id</th>
                                    <th>Salary</th>
                                    <th>Start working date</th>
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
                                        <Card.Title>{`Delete employee ${selectedIdValues[1]} ${selectedIdValues[2]}?`}</Card.Title>
                                        <Card.Text>
                                            This item will be deleted.
                                        </Card.Text>
                                        <Button variant="primary" onClick={(e) => { setModalDeleteShow(!modalDeleteShow) }}>Delete</Button>
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