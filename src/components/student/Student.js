import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Student = (props) => {
    const { students } = props
    const { boardRoll } = useParams()
    let student = students.find(student => student.boardRoll === boardRoll)
    const { name, gender, semester, session, dept, section, classRoll, regNo, cellNo } = student
    return (
        <Container>
            <h2>{name}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Semester</td>
                        <td>{semester}</td>
                    </tr>
                    <tr>
                        <td>Session</td>
                        <td>{session}</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>{dept}</td>
                    </tr>
                    <tr>
                        <td>Section</td>
                        <td>{section}</td>
                    </tr>
                    <tr>
                        <td>Board Roll</td>
                        <td>{boardRoll}</td>
                    </tr>
                    <tr>
                        <td>Class Roll</td>
                        <td>{classRoll}</td>
                    </tr>
                    <tr>
                        <td>Regestration</td>
                        <td>{regNo}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td>
                            {
                                cellNo.map(cell =>
                                    <li className='list-unstyled'>{cell}</li>
                                )}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Link exact to='/'>  <Button> Back To Home</Button></Link>
        </Container>
    );
};

export default Student;