import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../presentationals/Footer'
import { Link } from 'react-router-dom';

const ToDoIndex = () => {

  const [ToDos, setToDos] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(setToDos) 
   }, []);

 
   
   return (
            <div  className="To-Do-list-screen">
              <Container>
                <p id="memo-title">To Dos<span id="add"><Link to='ToDoNew'>+</Link></span></p> 
                  <Row>
                    <ul>
                     {ToDos.map(toDo => <div className="mapClass" key={toDo.id}><ul><li>{toDo.task}</li></ul></div>)}
                     </ul>
                  </Row>
                  
              <Footer/>
              </Container>
            </div>
            )
          }

          export default ToDoIndex