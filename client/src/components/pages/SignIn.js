import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import background from "../../assets/back.jpg";
import server from "../../API/server";
import {useNavigate} from 'react-router-dom';
import ModalComp from "./admins_pages/table_components/ModalComp";

const SignIn = () => {
    const [modalMessage, setModalMessage] = useState([]);
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = {
            username: document.getElementById('email-input').value,
            password: document.getElementById('password-input').value,
        };
        try {
            const {data} = await server.post("http://localhost:5300/auth/login", form);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('email', data.email);
            window.location.href = '/'
        } catch (e) {
            setModalMessage(["Incorrect email or password"])
            changeStateOfModal();
            setModalText("Error! Can't make query. Error:");
        }
    };

    const changeStateOfModal = () => {
        setShow(!show);
    }

    return (
        <div>
            <ModalComp show={show} modalMessage={modalMessage} modalText={modalText}
                       changeStateOfModal={changeStateOfModal}/>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                height: "900px",
                position: "relative"
            }}>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col sm={7} lg={5} style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            padding: "40px 30px",
                            borderRadius: "30px",
                            marginTop: "12em"
                        }}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control id={'email-input'} type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control id={'password-input'} type="password" placeholder="Password"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SignIn;