import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MustDo = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm></Col>
                <Col sm xs={6}>
                    <div>
                        <h3>Must do <Button size="lg" variant="light">Add task ➕</Button></h3>
                        <h5>Homework</h5>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="What did You do?"
                                aria-label="What did You do?"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon2">
                                Add time ⏱️
                            </Button>
                        </InputGroup>
                        <h5>English lesson</h5>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="What did You learn?"
                                aria-label="What did You learn?"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon2">
                                Add time ⏱️
                            </Button>
                        </InputGroup>
                        <h5>Physical activity</h5>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="What was Your activity?"
                                aria-label="What was Your activity"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon2">
                                Add time ⏱️
                            </Button>
                        </InputGroup>
                        <h5>Room cleaning</h5>
                        <Button variant="success">Add time ⏱️</Button>
                        <h5>A walk with the dog</h5>
                        <Button variant="success">Add time ⏱️</Button>
                    </div>
                </Col>
                <Col sm></Col>
            </Row>
        </Container>
    );
};

export default MustDo;