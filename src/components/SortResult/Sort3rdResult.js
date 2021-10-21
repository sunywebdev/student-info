import { Table } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const SortFirstResult = ({ students }) => {
    const allStudents = students.filter(student => student?.result3rd !== 'R')
    const sortByGpa = allStudents.sort((a, b) => parseFloat(b.result3rd) - parseFloat(a.result3rd))
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
                        <th>GPA</th>
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
                                        {student?.result3rd}
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