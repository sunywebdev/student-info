import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Student from '../student/Student';
import Students from '../students/Students';

const Home = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch('/studentData.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Students students={students}></Students>
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/Student/:boardRoll'>
                        <Student students={students}></Student>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Home;