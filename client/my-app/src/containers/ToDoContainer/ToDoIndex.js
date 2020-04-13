import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import ToDoNew from './ToDoNew'
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
        <p className='heading-title'>To Dos</p> 
        <ToDoNew />
        
        <Row>
          <ul>
            {ToDos.map(toDo => 
              <div className="mapClass" key={toDo.id}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/TodoShow/${toDo.id}`}>  
                  <li>{toDo.task}</li> 
                </Link>
              </div>)}
          </ul>
        </Row>
      </Container>
    </div>
    )
  }

export default ToDoIndex