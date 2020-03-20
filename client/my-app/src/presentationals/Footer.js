import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
 

const Footer = () => {
      return (
            <div className="nav">
                  <Nav.Item>
                        <Link to='/'><span role='img' aria-label='#'>🏠</span></Link> 
                  </Nav.Item>
                  |

                  <Nav.Item>
                        <span  role='img' aria-label='#' id="battery">🔋</span>
                  </Nav.Item>
                  |
                  <div className="clock">
                        <Nav.Item>
                              <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
                        </Nav.Item>
                  </div>
                  |
                        <Nav.Item>
                              <span>Retro Pad® </span>
                        </Nav.Item>
             </div>
            )
      }


export default Footer