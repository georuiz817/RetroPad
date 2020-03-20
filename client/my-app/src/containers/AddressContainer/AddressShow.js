import React, { useState, useEffect} from 'react';
import { Container, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const AddressShow = (props) => {
    const [Address, setAddress] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        let id = props.match.params.id;
        fetch('http://localhost:3000/addresses/' + id)
        .then(res => res.json())
        .then(setAddress) 
       }, [props.match.params.id]);


    let  deleteAddress = (e) => {
            e.preventDefault()
            let id = props.match.params.id;
            fetch('http://localhost:3000/addresses/' + id, {
              method: "DELETE" 
            })
            .then((history.push('/addressView')))
          } 
        
       


    return (
        <div className="show-details">
            <Container>
       
                <Col>
                    <p>Name: <br></br> {Address.first_name} {Address.last_name}</p> 
                    <hr></hr>
                    <p>Home #: <br></br> {Address.house}</p>
                    <hr></hr>
                    <p>Mobile #: <br></br> {Address.mobile}</p>
                    <hr></hr>
                    <p>Email: <br></br> {Address.email}</p>
                    <hr></hr>
                    <button onClick={deleteAddress}><span role='img' aria-label='trash'>🗑️</span></button>
                </Col>
            </Container>
        </div>
        )
    }

export default AddressShow