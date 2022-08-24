import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Summary = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm></Col>
                <Col sm xs={6}>
                    <div>
                        <Button variant="success" size="lg">Let's check the price</Button>
                    </div>
                </Col>
                <Col sm></Col>
            </Row>
        </Container>
    );
};

export default Summary;