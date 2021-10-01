import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Search from '../search/Search';
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
    const search = (event) => {
        const searchText = event.target.value.toLowerCase()
        const search = students.filter(student => student.name.toLowerCase().includes(searchText))
        setsearchStudent(search)
    }
    return (
        <Container>
            <BrowserRouter>
                <Search search={search}></Search>
                <Switch>
                    <Route exact path='/'>
                        <Students
                            students={searchStudent}
                            search={search}
                        ></Students>
                    </Route>
                    <Route path='/Student/:boardRoll'>
                        <Student students={students}></Student>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Container>
    );
};

export default Home;