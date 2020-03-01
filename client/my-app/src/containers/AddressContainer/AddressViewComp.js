import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../presentationals/Footer'
import { Link } from 'react-router-dom';

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
                <p id="address-title">Addresses <span id="add"><Link to='addressNew'>+</Link></span></p> 
                  <Row>
                    {Addresses.map(address => <div className="mapClass" key={address.id}><ul><Link to={`/AddressShow/${address.id}`}><li>{address.first_name} {address.last_name}</li></Link></ul></div>)}
                  </Row>
              <Footer/>
              </Container>
            </div>
            )
          }

          export default AddressViewComp