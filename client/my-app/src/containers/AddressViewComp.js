import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../presentationals/Footer'



const AddressViewComp = () => {

  const [Addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/addresses')
    .then(res => res.json())
    .then(setAddresses) 
   }, []);




        return (
            <div  className="Address-list-screen">
            <Container>
            <p>addresses</p>
          <Row>
            {Addresses.map(contact => <ul><li>{contact.first_name} {contact.last_name}</li></ul>)}
          </Row>
            

        <Footer/>
        </Container>
        
        

            </div>
 
        )
  }


export default AddressViewComp