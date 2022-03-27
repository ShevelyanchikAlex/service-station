import React, { useState } from 'react';
import CarouselComp from '../CarouselComp'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import background from "../../assets/back.jpg";


const SignIn = () => {

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", height: "900px", position: "relative" }}>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col sm={7} lg={5} style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "40px 30px", borderRadius: "30px", marginTop: "12em" }}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Col>
                    <Col>3 of 2</Col>
                </Row>
                {/*<div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", height: "900px", position: "relative" }}>
            <Container style={{ width: '30%', position: "absolute", top: "30%", left: "32%", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "40px 30px", borderRadius: "30px" }} >
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
    </div >*/}
            </Container >
        </div>
    )
}

export default SignIn;