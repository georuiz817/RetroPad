import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../presentationals/Footer'
import ToDoNew from './ToDoNew'

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
              
                <p className='heading-title'>To Dos</p> 
                <ToDoNew />
                  <Row>
                    <ul>
                     {ToDos.map(toDo => <div className="mapClass" key={toDo.id}><li>{toDo.task}</li></div>)}
                    </ul>
                  </Row>
                  
              <Footer/>
              </Container>
            </div>
            )
          }

          export default ToDoIndex