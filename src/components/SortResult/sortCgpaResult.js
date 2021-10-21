import { Table } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const SortFirstResult = ({ students }) => {
    const allStudents = students.filter(student => student?.result4th !== 'R')
    console.log(allStudents)

    const sortByGpa = allStudents.sort((a, b) =>
        (((parseFloat(b.result1st) / 5) + (parseFloat(b.result2nd) / 5) + ((b.result3rd === 'R' ? 0 : parseFloat(b.result3rd)) / 5) + ((b.result4th === 'R' ? 0 : parseFloat(b.result4th)) / 10)).toFixed(2))
        -
        (((parseFloat(a.result1st) / 5) + (parseFloat(a.result2nd) / 5) + ((a.result3rd === 'R' ? 0 : parseFloat(a.result3rd)) / 5) + ((a.result4th === 'R' ? 0 : parseFloat(a.result4th)) / 10)).toFixed(2))

    )

    console.log(sortByGpa)
    let num = 1
    return (
        <div>
            <Table striped bordered hover size="sm" className='align-middle'>
                <thead className='fw-bold'>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Board Roll</th>
                        <th>CGPA out of {((4 / 5) + (4 / 5) + (4 / 5) + (4 / 10) + (4 / 15) + (4 / 20) + (4 / 25) + (4 / 15)).toFixed(2)} </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        sortByGpa?.map(student =>
                            <tr>
                                <td>
                                    <Link to={`/Student/${student.boardRoll}`} className="text-decoration-none text-dark">
                                        {num++}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/Student/${student.boardRoll}`} className="text-decoration-none text-dark">
                                        {student?.name}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/Student/${student.boardRoll}`} className="text-decoration-none text-dark">
                                        {student?.boardRoll}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/Student/${student.boardRoll}`} className="text-decoration-none text-dark">
                                        {((parseFloat(student?.result1st) / 5) + (parseFloat(student?.result2nd) / 5) + ((student?.result3rd === 'R' ? 0 : parseFloat(student?.result3rd)) / 5) + ((student?.result4th === 'R' ? 0 : parseFloat(student?.result4th)) / 10)).toFixed(2)}
                                    </Link>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default SortFirstResult;