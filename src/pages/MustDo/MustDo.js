import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MustDo = ({items}) => {
    const [mustDo, setMustDo] = useState("");
    const [homework, setHomework] = useState("");
    const [homeworkList, setHomeworkList] = useState(items);

    const add = (e) => {
        e.preventDefault();
        setHomeworkList((prev) => [...prev, homework]);
        setMustDo(homework);
        setHomework("")
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm></Col>
                <Col sm xs={6}>
                    <form>
                        <select value={mustDo} onChange={(e) => setMustDo(e.target.value)}>
                            <option value="">Choose...</option>
                            {homeworkList.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                            <option value="add">Add new</option>
                        </select>
                        {mustDo === 'add' && <>
                            <input type="text" value={homework} onChange={e => setHomework(e.target.value)}/>
                            <button onClick={add}>Add</button>
                        </>}
                    </form>
                </Col>
                <Col sm></Col>
            </Row>
        </Container>
    );
};

export default MustDo;