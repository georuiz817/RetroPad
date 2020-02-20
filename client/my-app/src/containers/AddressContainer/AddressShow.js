import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import Footer from '../../presentationals/Footer'
//import { Link } from 'react-router-dom';
 

const AddressShow = (props) => {
    const [Address, setAddress] = useState({});

    useEffect(() => {
        const id = this.props.match.params.id;
        fetch('http://localhost:3000/addresses/' + id)
        .then(res => res.json())
        .then(setAddress) 
       }, []);
       


    return (
        <div>
            <Container>
            <Row>
                <Col>
                <p>{Address.first_name}</p>
                <p>hi</p>
                </Col>
            </Row>


            </Container>

        </div>
)



}

export default AddressShow