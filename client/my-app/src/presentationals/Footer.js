import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const Footer = () => {
        return (
            <div className="nav">
      <Nav >
      <Nav.Item>
        <Link to='/'><span role='img' aria-label='#'>🏠</span></Link> 
      </Nav.Item>

     
      </Nav>

            </div>
 
        )
  }


export default Footer