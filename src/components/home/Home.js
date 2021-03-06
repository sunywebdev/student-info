import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Sort1stResult from '../SortResult/Sort1stResult';
import Sort2ndResult from '../SortResult/Sort2ndResult';
import Sort3rdResult from '../SortResult/Sort3rdResult';
import Sort4thResult from '../SortResult/Sort4thResult';
import Student from '../student/Student';
import Students from '../students/Students';
import SortCgpaResult from '../SortResult/sortCgpaResult'
const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('/studentData.json')
            .then(res => res.json())
            .then(data => {
                setStudents(data)
                setsearchStudent(data)
            })
    }, [])
    const [searchStudent, setsearchStudent] = useState([])
    const search = (event) => {
        const searchText = event.target.value.toLowerCase()
        const search = students.filter(student => student.name.toLowerCase().includes(searchText))
        setsearchStudent(search)
    }
    /*     const searchUsingRoll = (event) => {
            const searchRoll = parseInt(event.target.value)
            const search = students.filter(student => student.boardRoll.includes(searchRoll))
            setsearchStudent(search)
        } */
    return (
        <Container>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Students
                            allStudents={students}
                            students={searchStudent}
                            search={search}
                        /*   searchUsingRoll={searchUsingRoll} */
                        ></Students>
                    </Route>
                    <Route path='/Student/:boardRoll'>
                        <Student students={students}>
                            <Button onClick={search} className='button mb-3 py-1 ' style={{
                                borderRadius: '.25rem'
                            }}> Back To Student List</Button>
                        </Student>
                    </Route>
                    <Route path='/Sort1stResult'>
                        <Sort1stResult
                            students={students}>
                        </Sort1stResult>
                    </Route>
                    <Route path='/Sort2ndResult'>
                        <Sort2ndResult
                            students={students}>
                        </Sort2ndResult>
                    </Route>
                    <Route path='/Sort3rdResult'>
                        <Sort3rdResult
                            students={students}>
                        </Sort3rdResult>
                    </Route>
                    <Route path='/Sort4thResult'>
                        <Sort4thResult
                            students={students}>
                        </Sort4thResult>
                    </Route>
                    <Route path='/sortCgpaResult'>
                        <SortCgpaResult
                            students={students}>
                        </SortCgpaResult>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container >
    );
};

export default Home;