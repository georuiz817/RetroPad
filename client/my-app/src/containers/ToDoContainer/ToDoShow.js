import React, { useState, useEffect} from 'react';
import { Container, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const ToDoShow = (props) => {
    const [ToDo, setToDo] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        let id = props.match.params.id;
        fetch('http://localhost:3000/todos/' + id)
        .then(res => res.json())
        .then(setToDo) 
       }, [props.match.params.id]);
       
    let  deleteToDo = (e) => {
            e.preventDefault()
            let id = props.match.params.id;
            fetch('http://localhost:3000/todos/' + id, {
              method: "DELETE" 
            })
            history.push('/ToDoIndex')
        } 
    
        return (
        <div className="show-details">
            <Container>
          
                    <Col>
                        <p><u>{ToDo.task}</u></p>
                        <hr></hr>
                        <button onClick={deleteToDo}><span role='img' aria-label='trash'>🗑️</span></button>
                    </Col>
       
            </Container>

        </div>
        )
    }

export default ToDoShow