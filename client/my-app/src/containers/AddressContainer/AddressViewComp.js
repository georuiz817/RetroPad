import React, { useState, useEffect} from 'react';
import { Container} from 'react-bootstrap';
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
            <div>
              <Container>
                <p className="heading-title">Addresses <span id="add"><Link to='addressNew'>+</Link></span></p> 
                      
                    <ul>
                      {Addresses.map(address =>
                         <div key={address.id}>
                           <Link  to={`/AddressShow/${address.id}`}>
                             <li className="list-off">{address.first_name} {address.last_name}</li>
                           </Link>
                         </div>)}
                    </ul> 
              
              <Footer/>
              </Container>
            </div>
            )
          }

          export default AddressViewComp