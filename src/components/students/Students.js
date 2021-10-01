import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Students.css'

const Students = (props) => {
    const { students } = props
    console.log(students);

    return (
        <>
            {students.length === 0 ?
                <>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="dark" />
                </>

                :

                <Row xs={2} md={4} className="g-2 g-md-3">
                    {students.map(student =>
                        <Col key={student.boardRoll} >
                            <Card className='h-100 card'>
                                {student.gender === "Male" ?
                                    <Card.Img variant="top mt-2 rounded-circle mx-auto img" src="/male.jpg" />
                                    :
                                    <Card.Img variant="top mt-2 rounded-circle mx-auto img" src="/female.jpg" />
                                }

                                <Card.Body className='d-flex flex-column justify-content-center px-1 px-md-2'>
                                    <Card.Title>{student.name}</Card.Title>
                                    <h6>{student.semester}-{student.dept}-{student.section}</h6>
                                    <Card.Text className='fw-bold'>
                                        {student.boardRoll}
                                    </Card.Text>
                                    <Link to={`/Student/${student.boardRoll}`}> <Button variant="" className='py-1 button'>Show Details</Button></Link>
                                </Card.Body>

                            </Card>
                        </Col>
                    )}
                </Row>}
        </>
    );
};

export default Students;
