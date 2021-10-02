// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { Route, useHistory, matchPath } from 'react-router';
// import { BrowserRouter, Switch, useLocation } from 'react-router-dom';
// import Search from '../search/Search';
// import Student from '../student/Student';
// import Students from '../students/Students';

// const Home = () => {
//     const [students, setStudents] = useState([])
//     const [searchStudent, setsearchStudent] = useState([])
//     const { pathname } = window.location;
//     useEffect(() => {
//         fetch('/studentData.json')
//             .then(res => res.json())
//             .then(data => {
//                 setStudents(data)
//                 setsearchStudent(data)
//             })
//     }, [])

//     const search = (event) => {
//         const searchText = event.target.value.toLowerCase()
//         const search = students.filter(student => student.name.toLowerCase().includes(searchText))
//         setsearchStudent(search)
//     }
//     // console.log(search)
//     const history = useLocation;
//     const [toHome, setHome] = useState(true);
//     const backToHome = () => {
//         setHome(false)
//         history.push('/');
//     }

//     console.log(pathname)

//     return (
//         <Container>
//             <BrowserRouter>
//             {
//                 pathname === '/Student/171966' ? '' : <Search toHome= { toHome } search = { search } > </Search>
// }
// {/* <Search search={search}></Search> */ }
// <Switch>
//     <Route exact path = '/' >
//         <Students
//                             students={ searchStudent }
// search = { search }
//     > </Students>
//     < /Route>
//     < Route path = '/Student/:boardRoll' >
//         <Student backToHome={ backToHome } students = { students } > </Student>
//             < /Route>
//             < /Switch>
//             < /BrowserRouter>
//             < /Container>
//     );
// };

// export default Home;

// import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Students.css'

// const Students = (props) => {
//     const { students } = props
//     console.log(students);

//     return (
//         <>
//         {
//             students.length === 0 ?
//                 <div className="py-5">
//                     <Spinner animation="border" className = 'loading mx-2' />
//                         <Spinner animation="border" className = 'loading mx-2' />
//                             <Spinner animation="border" className = 'loading mx-2' />
//                                 <Spinner animation="border" className = 'loading mx-2' />
//                                     <Spinner animation="border" className = 'loading mx-2' />
//                                         <Spinner animation="border" className = 'loading mx-2' />
//                                             <Spinner animation="border" className = 'loading mx-2' />
//                                                 </div>

//                 :

// <Row xs={ 2 } md = { 4} className = "g-2 g-md-3" >
// {
//     students.map(student =>
//         <Col key={ student.boardRoll } >
//     <Card className='h-100 card' >
//     {
//         student.gender === "Male" ?
//             <Card.Img variant="top mt-2 rounded-circle mx-auto img" src = "/male.jpg" />
//                                     :
//                                     < Card.Img variant = "top mt-2 rounded-circle mx-auto img" src = "/female.jpg" />
//                                 }

//     < Card.Body className = 'd-flex flex-column justify-content-center px-1 px-md-2' >
//         <Card.Title>{ student.name } < /Card.Title>
//         < h6 > { student.semester } - { student.dept } - { student.section } < /h6>
//         < Card.Text className = 'fw-bold' >
//             { student.boardRoll }
//             < /Card.Text>
//             < Link to = {`/Student/${student.boardRoll}`}> <Button variant="" className = 'py-1 button' > Show Details < /Button></Link >
//                 </Card.Body>

//                 < /Card>
//                 < /Col>
//                     )}
// </Row>}
//     < />
//     );
// };

// export default Students;

// import { Button, Container, Image, Table } from 'react-bootstrap';
// import { useHistory, useParams, useState } from 'react-router';
// import { Link } from 'react-router-dom';
// import './Student.css'

// const Student = (props) => {
//     const { students, backToHome } = props
//     console.log(backToHome)
//     const { boardRoll } = useParams()

//     let student = students.find(student => student.boardRoll === boardRoll)
//     const { name, gender, semester, session, dept, section, classRoll, regNo, cellNo, result1st, result2nd, result3rd, result4th
//     } = student || {}

//     const result = ((parseFloat(result1st) / 5) + (parseFloat(result2nd) / 5) + ((result3rd === 'R' ? 0 : parseFloat(result3rd)) / 5) + ((result4th === 'R' ? 0 : parseFloat(result4th)) / 10)).toFixed(2)


//     const { pathname } = window.location;

//     console.log(pathname)

//     return (
//         <Container>

//             { gender === "Male" ?
//             <Image src= "/male.jpg" className = 'image' roundedCircle />
//                 :
// <Image src="/female.jpg" className = 'image' roundedCircle />
//             }
// <h1 className='py-2' > { name } < /h1>
//     < Table bordered size = "sm" className = 'table' >
//         <thead>
//         </thead>
//         < tbody >
//         <tr>
//         <td className='fw-bold' > Name < /td>
//             < td > { name } < /td>
//             < /tr>
//             < tr >
//             <td className='fw-bold' > Gender < /td>
//                 < td > { gender } < /td>
//                 < /tr>
//                 < tr >
//                 <td className='fw-bold' > Semester < /td>
//                     < td > { semester } < /td>
//                     < /tr>
//                     < tr >
//                     <td className='fw-bold' > Session < /td>
//                         < td > { session } < /td>
//                         < /tr>
//                         < tr >
//                         <td className='fw-bold' > Department < /td>
//                             < td > { dept } < /td>
//                             < /tr>
//                             < tr >
//                             <td className='fw-bold' > Section < /td>
//                                 < td > { section } < /td>
//                                 < /tr>
//                                 < tr >
//                                 <td className='fw-bold' > Board Roll < /td>
//                                     < td > { boardRoll } < /td>
//                                     < /tr>
//                                     < tr >
//                                     <td className='fw-bold' > Class Roll < /td>
//                                         < td > { classRoll } < /td>
//                                         < /tr>
//                                         < tr >
//                                         <td className='fw-bold' > Regestration < /td>
//                                             < td > { regNo } < /td>
//                                             < /tr>
//                                             < tr >
//                                             <td className='fw-bold' > Mobile Number < /td>
//                                                 < td >
//                                             {
//                                                 cellNo?.map(cell =>
//                                     <li key = { cell } className = 'list-unstyled' > <Button className='text-decoration-none py-1 my-1 button' href = {`tel:${parseInt(cell)}`} > Click To Call { cell } </Button></li >
//                                 )}
// </td>
//     < /tr>
//     < tr >
//     <td colSpan='2' >
//         <Table bordered size = "sm" className = ' m-0 mt-2' >
//             <tbody>
//             <tr className='result' >
//                 <td colSpan='2' > Result < /td>
//                     < /tr>
//                     < tr >
//                     <td className='fw-bold' > 1st Semester < /td>
//                         < td > { result1st } < /td>
//                         < /tr>
//                         < tr >
//                         <td className='fw-bold' > 2nd Semester < /td>
//                             < td > { result2nd } < /td>
//                             < /tr>
//                             < tr >
//                             <td className='fw-bold' > 3rd Semester < /td>
//                                 < td > { result3rd } < /td>
//                                 < /tr>
//                                 < tr >
//                                 <td className='fw-bold' > 4th Semester < /td>
//                                     < td > { result4th } < /td>
//                                     < /tr>
//                                     < tr >
//                                     <td className='fw-bold' > 5th Semester < /td>
//                                         < td > Exam is pending < /td>
//                                             < /tr>
//                                             < tr >
//                                             <td className='fw-bold' > 6th Semester < /td>
//                                                 < td > Exam is pending < /td>
//                                                     < /tr>
//                                                     < tr >
//                                                     <td className='fw-bold' > 7th Semester < /td>
//                                                         < td > Exam is pending < /td>
//                                                             < /tr>
//                                                             < tr >
//                                                             <td className='fw-bold' > 8th Semester < /td>
//                                                                 < td > Exam is pending < /td>
//                                                                     < /tr>
//                                                                     < tr className = "result" >
//                                                                         <td className='' > CGPA < /td>
//                                                                             < td > { result }


//                                                                             < /td>
//                                                                             < /tr>
//                                                                             < /tbody>
//                                                                             < /Table>
//                                                                             < /td>
//                                                                             < /tr>
//                                                                             < /tbody>
//                                                                             < /Table>
//                                                                             < Button className = 'button mb-3' onClick = {() => backToHome()}> Back To Student List < /Button>
//                                                                                 < /Container >
//     );
// };

// export default Student;

// import React, { useEffect } from 'react';
// import { FloatingLabel, Form } from 'react-bootstrap';

// const Search = ({ search, toHome }) => {
//     // toHome ? true : search = '';

//     return (
//         <div>
//         <FloatingLabel
//                 controlId= "floatingInput"
//     label = "Search Students ......."
//     className = "mb-3"
//     style = {{ color: "#FE676D" }
// }>
//     <Form.Control onChange={ search } value = { toHome === false ? '' : ''} type = "text" placeholder = "suny" style = {{ border: "2px solid #FE676D" }} />
//         < /FloatingLabel>
//         < /div>
//     );
// };

// export default Search;