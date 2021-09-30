import { Button, Container, Image, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Student = (props) => {
    const { students } = props
    const { boardRoll } = useParams()

    let student = students.find(student => student.boardRoll === boardRoll)
    const { name, gender, semester, session, dept, section, classRoll, regNo, cellNo, result1st, result2nd, result3rd, result4th
    } = student || {}

    let result = ((parseFloat(result1st) / 5) + (parseFloat(result2nd) / 5) + (parseFloat(result3rd) / 5) + (parseFloat(result4th) / 10)).toFixed(2)
    if (result === 'NaN') {
        result = 0
    }
    const call = parseInt(cellNo)

    return (
        <Container>

            {gender === "Male" ?
                <Image src="/male.jpg" roundedCircle />
                :
                <Image src="/female.jpg" roundedCircle />
            }
            <h2>{name}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold'>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Semester</td>
                        <td>{semester}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Session</td>
                        <td>{session}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Department</td>
                        <td>{dept}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Section</td>
                        <td>{section}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Board Roll</td>
                        <td>{boardRoll}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Class Roll</td>
                        <td>{classRoll}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Regestration</td>
                        <td>{regNo}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Mobile Number</td>
                        <td>
                            {
                                cellNo?.map(cell =>
                                    <li key={cell} className='list-unstyled'><a className='text-decoration-none' href="tel:${call}">Click To Call {cellNo}</a></li>
                                )}
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle fw-bold">Result</td>
                        <td>
                            <Table striped bordered hover size="sm">
                                <tbody>
                                    <tr>
                                        <td className='fw-bold'>1st Semester</td>
                                        <td>{result1st}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>2nd Semester</td>
                                        <td>{result2nd}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>3rd Semester</td>
                                        <td>{result3rd}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>4th Semester</td>
                                        <td>{result4th}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>5th Semester</td>
                                        <td>Exam is pending</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>6th Semester</td>
                                        <td>Exam is pending</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>7th Semester</td>
                                        <td>Exam is pending</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>8th Semester</td>
                                        <td>Exam is pending</td>
                                    </tr>
                                    <tr className="bg-info">
                                        <td className='fw-bold'>CGPA</td>
                                        <td>{result}


                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Link exact to='/'>  <Button> Back To Home</Button></Link>
        </Container >
    );
};

export default Student;