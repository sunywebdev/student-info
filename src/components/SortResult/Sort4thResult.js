import { Table } from 'react-bootstrap';
import React from 'react';

const SortFirstResult = ({ students }) => {
    const allStudents = students.filter(student => student?.result4th !== 'R')
    const sortByGpa = allStudents.sort((a, b) => parseFloat(b.result4th) - parseFloat(a.result4th))
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
                                <td>{student?.result4th}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default SortFirstResult;