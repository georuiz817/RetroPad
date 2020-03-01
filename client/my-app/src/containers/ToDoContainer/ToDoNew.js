import React, { useState} from 'react';
import { Container, } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Footer from '../../presentationals/Footer'
 

const ToDoNew = () => {

    const [task, setTask] = useState('');
   


    const history = useHistory();

    let handleSubmit = (e) =>{
        
        e.preventDefault();
        
        fetch('http://localhost:3000/todos',
        {
            method: 'post', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },   
            body: JSON.stringify({ task })
        })
          .then(res => res.json())
          history.push('/ToDoIndex');
      }
       
      
    
  return (
      <div>
      <Container>
        
            <div>
                <form className="form-bar" onSubmit={handleSubmit}>
                <input type="text" value={task} placeholder="task" name="task" onChange={(e) => setTask(e.target.value)}/>
                <input class="btn btn-warning" type="submit" value="Add Task!" />
                </form>

            </div>
            <Footer/>
        </Container>
      </div>
        )
  }


export default ToDoNew