import React, { useState, useEffect} from 'react';
import { Container} from 'react-bootstrap';
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
              <p className="heading-title">Addresses <span id="add"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='addressNew'>+</Link></span></p> 
              <ul>
                {Addresses.map(address =>
                  <div key={address.id}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}}  to={`/AddressShow/${address.id}`}>
                      <li className="list-off">{address.first_name} {address.last_name}</li>
                    </Link>
                  </div>)}
              </ul> 
          </Container>
          </div>
          )
        }

export default AddressViewComp