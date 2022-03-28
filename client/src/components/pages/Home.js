import React, { useState } from 'react';
import CarouselComp from '../CarouselComp'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';

const serviceList = [
    {
        title: 'Tire changing',
        price: '100$',
        description: "Very good quality of the service. Best price ever."
    },
    {
        title: 'Washing',
        price: '300$',
        description: "Very good quality of the service. Best price ever."
    },
    {
        title: 'Tuning',
        price: '250$',
        description: "Very good quality of the service. Best price ever."
    },
    {
        title: 'Fixing',
        price: '500$',
        description: "Very good quality of the service. Best price ever."
    },
    {
        title: 'Tuning',
        price: '250$',
        description: "Very good quality of the service. Best price ever."
    },
    {
        title: 'Fixing',
        price: '500$',
        description: "Very good quality of the service. Best price ever."
    }, {
        title: 'Fixing',
        price: '500$',
        description: "Very good quality of the service. Best price ever."
    },
]

const Home = () => {

    const renderedItems = serviceList.map((item) => {
        return (
            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={require("../../assets/card.jpg")} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary">{item.price}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container >
        )
    });

    return (
        <div style={{ marginBottom: "50px" }}>
            <CarouselComp></CarouselComp>
            <Row style={{
                textAlign: 'center',
                margin: '30px auto 0px auto',
                fontSize: '30px',

            }}>
                <div>Our services</div>
            </Row>
            <Container style={{ padding: '30px' }}>
                <Row xs={1} md={4} className="g-4">
                    {renderedItems}
                </Row>
            </Container>
            <div style={{ backgroundColor: '#212529', padding: '30px' }}>
                <Container>
                    <Form>
                        <div style={{ textAlign: 'center', margin: '0 auto' }}>
                            <Row style={{ color: 'white', fontSize: '40px' }}>
                                Want more Information?
                            </Row>
                            <Row style={{ color: 'white', fontSize: '40px' }}>
                                Leave you phone number and we will call you immediately!
                            </Row>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted" style={{ color: 'white !important' }}>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label >Phone number</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="+ 375 (29)" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault() }}>
                            Call me
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default Home;