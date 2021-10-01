import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Students.css'

const Students = (props) => {
    const { students } = props
    console.log(students);

    return (
        <>
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
            </Row>
        </>
    );
};

export default Students;
