import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Student from '../student/Student';
import Students from '../students/Students';

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
    const [searchText, setSearchText] = useState()
    const search = (event) => {
        const searchText = event.target.value.toLowerCase()
        setSearchText(searchText)
        const search = students.filter(student => student.name.toLowerCase().includes(searchText))
        setsearchStudent(search)
    }
    return (
        <Container>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Students
                            allStudents={students}
                            students={searchStudent}
                            search={search}
                            searchText={searchText}
                        ></Students>
                    </Route>
                    <Route path='/Student/:boardRoll'>
                        <Student students={students}>
                            <Button onClick={search} className='button mb-3 py-1 ' style={{
                                borderRadius: '.25rem'
                            }}> Back To Student List</Button>
                        </Student>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container >
    );
};

export default Home;