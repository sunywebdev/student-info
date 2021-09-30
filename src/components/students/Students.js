import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Students = (props) => {
    const { students } = props
    console.log(students);
    return (
        <Container>
            <Row xs={2} md={4} className="g-2">
                {students.map(student =>
                    <Col key={student.boardRoll} >
                        <Card className='h-100'>
                            {student.gender === "Male" ?
                                <Card.Img variant="top" src="./male.jpg" />
                                :
                                <Card.Img variant="top" src="./female.jpg" />
                            }

                            <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
                                <Card.Title>{student.name}</Card.Title>
                                <h6>{student.semester}-{student.dept}-{student.section}</h6>
                                <Card.Text>
                                    {student.boardRoll}
                                </Card.Text>
                                <Link to={`/Student/${student.boardRoll}`}> <Button variant="success" className='py-1'>Show Details</Button></Link>
                            </Card.ImgOverlay>

                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Students;
/*   <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Session</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Section</th>
                        <th>Class Roll</th>
                        <th>Board Roll</th>
                        <th>Reg Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student =>
                        <tr key={student.boardRoll}>
                            <td >{student.name}</td>
                            <td>{student.session}</td>
                            <td>{student.gender}</td>
                            <td>{student.dept}</td>
                            <td >{student.semester}</td>
                            <td >{student.section}</td>
                            <td>{student.classRoll}</td>
                            <td >{student.boardRoll}</td>
                            <td>{student.regNo}</td>
                        </tr>
                    )}

                </tbody>
            </Table> */