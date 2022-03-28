import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


const TableServiceComp = ({ serviceList }) => {
    const [selectedId, setSelectedId] = useState(1);

    console.log(serviceList);
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
                <td>{item.order_id}</td>
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

                                for (var i = 1; i < parent.children.length; i++) {
                                    const item = document.getElementById(`servUpdate${i}`);
                                    console.log(item);
                                    item.value = parent.children[i].innerHTML
                                }
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
                                <Card >
                                    <Card.Header as="h5">Add item</Card.Header>
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
                                                <Form.Control type="text" id="servName" placeholder="Service name" />
                                                <Form.Control type="text" id="servPrice" placeholder="Service price" />
                                                <Form.Control type="text" id="servWarranty" placeholder="Service warranty" />
                                                <Form.Control type="text" id="servDescr" placeholder="Service description" />
                                                <Form.Control type="text" id="servEnd_date" placeholder="Service end date" />
                                                <Form.Control type="text" id="servJob_id" placeholder="Service job id" />
                                                <Form.Control type="text" id="servOrder_id" placeholder="Service order id" />
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Button variant="primary">Add item</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
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
                                </Card>
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