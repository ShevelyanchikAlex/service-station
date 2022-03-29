import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import server from '../../../API/server'
import AddItem from './table_components/AddItem'
import UpdateItem from './table_components/UpdateItem'


// const TableServiceComp = ({ serviceList }) => {
const TableServiceComp = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const [selectedIdValues, setSelectedIdValues] = useState([]);

    useEffect(() => {

        const search = async (path, func) => {
            const { data } = await server.get(path);
            console.log(data);
            func(data);
        }

        search('/services', setServiceList);
    }, []);

    console.log(selectedIdValues);


    const tableHeaders = ['Name', 'Price', 'Warranty', 'Description', 'End_date', 'Job_id', 'Order_id'];
    const tableName = 'service';


    const createItem = (valuesOfInputs) => {
        const addQuery = async (path, func) => {
            const { data } = await server.post(path, {
                name: 'tire changing',
                price: 700,
                warranty: 2,
                description: "very fast, good quality",
                end_date: '2022-01-01T00:00:00.000Z',
                job_id: 1,
                orderId: 1
            })
            // func(data);
        }

        addQuery('/services', setServiceList);


        // onSearchSubmit = async (term) => {
        //     const response = await unsplash.get('/search/photos', {
        //         params: { query: term },
        //     });
        //     this.setState({ images: response.data.results });

        // }

        //     Axios.post('http://localhost:4000/api/insert', {
        //         s_name: s_name,
        //         s_price: price
        //     })

        // setServiceList([...serviceList, { s_name: s_name, s_price: price }]);
    };

    const updateItem = () => {

    }

    //console.log(serviceList);
    const renderedItems = serviceList.map((item, index) => {
        return (
            <tr>
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
                                for (var i = 1; i < parent.children.length; i++) {
                                    array[i] = parent.children[i].innerHTML;
                                    // const item = document.getElementById(`servUpdate${i}`);
                                    // console.log(item);
                                    // item.value = parent.children[i].innerHTML
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
                                {selectedId ? <UpdateItem createItem={updateItem} tableHeaders={tableHeaders} tableName={tableName} selectedId={selectedId}></UpdateItem> : ""}
                                {/*<Card>
                                    <Card.Header as="h5">Update item</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={3}>
                                                <Card.Text>
                                                    Name
                                                </Card.Text>
                                                <Card.Text>
                                                    Price
                                                </Card.Text>
                                                <Card.Text>
                                                    Warranty
                                                </Card.Text>
                                                <Card.Text>
                                                    Description
                                                </Card.Text>
                                                <Card.Text>
                                                    End_date
                                                </Card.Text>
                                                <Card.Text>
                                                    Job_id
                                                </Card.Text>
                                                <Card.Text>
                                                    Order_id
                                                </Card.Text>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="text" id="servUpdate1" placeholder="Service name" />
                                                <Form.Control type="text" id="servUpdate2" placeholder="Service price" />
                                                <Form.Control type="text" id="servUpdate3" placeholder="Service warranty" />
                                                <Form.Control type="text" id="servUpdate4" placeholder="Service description" />
                                                <Form.Control type="text" id="servUpdate5" placeholder="Service end date" />
                                                <Form.Control type="text" id="servUpdate6" placeholder="Service job id" />
                                                <Form.Control type="text" id="servUpdate7" placeholder="Service order id" />
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Button variant="primary">Update item</Button>
                                    </Card.Body>
                                </Card>*/}
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
                                    <Button variant="primary">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default TableServiceComp;