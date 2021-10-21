import { Button, Container, Image, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Student.css'

const Student = (props) => {
    const { students } = props
    const { boardRoll } = useParams()

    let student = students.find(student => student.boardRoll === boardRoll)
    const { name, gender, semester, session, dept, section, classRoll, regNo, cellNo, result1st, result2nd, result3rd, result4th
    } = student || {}

    const result = ((parseFloat(result1st) / 5) + (parseFloat(result2nd) / 5) + ((result3rd === 'R' ? 0 : parseFloat(result3rd)) / 5) + ((result4th === 'R' ? 0 : parseFloat(result4th)) / 10)).toFixed(2)
    const resultMax = ((4 / 5) + (4 / 5) + (4 / 5) + (4 / 10)).toFixed(2)
    

    return (
        <Container>

            {gender === "Male" ?
                <Image src="/male.jpg" className='image' roundedCircle />
                :
                <Image src="/female.jpg" className='image' roundedCircle />
            }
            <h1 className='py-2'>{name}</h1>
            <Table bordered size="sm" className='table'>
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
                                    <li key={cell} className='list-unstyled'><Button className='text-decoration-none py-1 my-1 button' href={`tel:${parseInt(cell)}`}>Click To Call {cell}</Button></li>
                                )}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <Table bordered size="sm" className=' m-0 mt-2'>
                                <tbody>
                                    <tr className='result'>
                                        <td colSpan='2'>Result</td>
                                    </tr>
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
                                    <tr className="result">
                                        <td className=''>CGPA</td>
                                        <td>
                                            <span className="fs-5">{result}</span> out of  <span className="fs-5">{resultMax}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Link to='/'> {props.children}</Link>
        </Container >
    );
};

export default Student;