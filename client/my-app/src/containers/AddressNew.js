import React, { useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AddressNew = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    let handleSubmit = (e) =>{
        
        e.preventDefault();
        fetch('http://localhost:3000/addresses',
        {
            method: 'post', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },   
            body: JSON.stringify({ first_name, last_name })
        })
          .then(res => res.json())
          
      }
       
      
    
  return (
      <div>
      <Container>
            <div>
                <form className="form-bar" onSubmit={handleSubmit}>
                <input type="text" value={first_name} placeholder="create contact" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" value={last_name} placeholder="create contact" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
                <button id="button" type="submit"><span role='img' aria-label='glass'>Create!</span></button>
                </form>

            </div>
      </Container>
      </div>
        )
  }


export default AddressNew