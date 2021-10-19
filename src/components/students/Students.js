import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import './Students.css'

const Students = (props) => {
    const { allStudents, students, searchUsingRoll } = props
    console.log(students);

    return (
        <>
            {
                allStudents?.length === 0
                    ?
                    <div className="py-5">
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                        <Spinner animation="border" className='loading mx-2' />
                    </div>
                    :
                    <>
                        <Search
                            search={props.search}
                            searchUsingRoll={searchUsingRoll}
                        ></Search>
                        {
                            students?.length > 0
                                ?
                                < Row xs={2} md={4} className="g-2 g-md-3">
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
                                :
                                <>
                                    <h2 className='fw-bold fs-1 pt-5'>Student Not Found</h2>
                                    <p className='fw-bold fs-5'>Enter a Valid Name</p>
                                </>
                        }
                    </>
            }
        </>
    );
};

export default Students;
