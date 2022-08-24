import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const FreeTime = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm></Col>
                <Col sm xs={6}>
                    <div>
                        <h3>Free time <Button size="lg" variant="light">Add task ➕</Button></h3>
                        <h5>Gaming</h5>
                        <Button variant="success">Add time ⏱️</Button>
                        <h5>Watching</h5>
                        <Button variant="success">Add time ⏱️</Button>
                        <h5>Fun with friends</h5>
                        <Button variant="success">Add time ⏱️</Button>
                    </div>
                </Col>
                <Col sm></Col>
            </Row>
        </Container>
    );
};

export default FreeTime;