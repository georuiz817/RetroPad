import React from 'react'
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
 
const Footer = () => {
      return (
            <div className="nav">
                  <Link to='/'><span role='img' aria-label='#'>🏠</span></Link> 
                  |
            <span  role='img' aria-label='#' id="battery">🔋</span>
                  |
            <div className="clock">
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
                  |
                  <span>Retro Pad® </span>
            </div>
            )
      }

export default Footer