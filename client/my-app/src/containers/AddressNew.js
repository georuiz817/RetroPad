import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AddressNew = () => {

    const [Address, setAddress] = useState({
        first_name:'',
        last_name:'',
        house: 0,
        mobile: 0,
        email:'',
    });
    

    let handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3000/addresses',
        {
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },   
            body: JSON.stringify({ Address })
        })
          .then(res => res.json())
          .then(setAddress)
      }
      

  return (
      <div>
      <Container>
            <div>
                <form className="form-bar" onSubmit={handleSubmit()}>
                <input type="text" value={Address.first_name} placeholder="create contact" name="name" onChange={(e) => setAddress( e.target.value)}/>
                <button id="button" type="submit"><span role='img' aria-label='glass'>Create!</span></button>
                </form>

            </div>
      </Container>
      </div>
        )
  }


export default AddressNew