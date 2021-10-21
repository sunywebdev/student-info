import { Table } from 'react-bootstrap';
import React from 'react';

const SortFirstResult = ({ students }) => {
    const sortByGpa = students.sort((a, b) => parseFloat(b.result2nd) - parseFloat(a.result2nd))
    console.log(sortByGpa)
    let num = 1
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
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
                                <td>{num++}</td>
                                <td>{student?.name}</td>
                                <td>{student?.boardRoll}</td>
                                <td>{student?.result2nd}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default SortFirstResult;