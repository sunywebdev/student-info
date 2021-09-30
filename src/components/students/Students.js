import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../search/Search';

const Students = (props) => {
    const { students } = props
    console.log(students);

    return (
        <>
            <Search search={props.search}></Search>
            <Row xs={2} md={4} className="g-2">
                {students.map(student =>
                    <Col key={student.boardRoll} >
                        <Card className='h-100'>
                            {student.gender === "Male" ?
                                <Card.Img variant="top" src="/male.jpg" />
                                :
                                <Card.Img variant="top" src="/female.jpg" />
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
        </>
    );
};

export default Students;
