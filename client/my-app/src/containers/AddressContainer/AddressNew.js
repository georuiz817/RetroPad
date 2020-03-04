import React, { useState} from 'react';
import { Container, } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Footer from '../../presentationals/Footer'
 

const AddressNew = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [house, setHouse] = useState('');
    const [email, setEmail] = useState('');


    const history = useHistory();

    let handleSubmit = (e) =>{
        
        e.preventDefault();
        
        fetch('http://localhost:3000/addresses',
        {
            method: 'post', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },   
            body: JSON.stringify({ first_name, last_name, mobile, house, email })
        })
          .then(res => res.json())
          history.push('/addressView');
      }
       
      
    
  return (
      <div>
      <Container>
        
            <div>
                <form className="form-bar" onSubmit={handleSubmit}>
                <input type="text" value={first_name} placeholder="First name" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" value={last_name} placeholder="Last name" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" value={mobile} placeholder="Mobile #" name="lastName" onChange={(e) => setMobile(e.target.value)}/>
                <input type="text" value={house} placeholder="home #" name="house" onChange={(e) => setHouse(e.target.value)}/>
                <input type="text" value={email} placeholder="email" name="house" onChange={(e) => setEmail(e.target.value)}/>
                
                <input class="btn btn-warning" type="submit" value="Create dish!" />
                </form>

            </div>
     
        </Container>
      </div>
        )
  }


export default AddressNew