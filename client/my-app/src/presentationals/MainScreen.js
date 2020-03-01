import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../presentationals/Footer'

const MainScreen = () => {
    return (
        <div className="screen">
            <Container>
            
                <Row>
                    
                        <Col>
                        <Link to="/addressView">
                            <span role='img' aria-label='#'>📞</span>
                            <br></br>
                            <span>Address</span>
                        </Link>
                        </Col>
                     

                    <Col>
                    <Link to='/MemoNew'>
                        <span role='img' aria-label='#'>📝</span>
                        <br></br>
                        <span>Memo Pad</span>
                        </Link>
                    </Col>

         
                </Row>
                 
                    
                <Row>
                    <Col>
                        <Link to='weather'>
                            <span role='img' aria-label='#'>❄️</span>
                            <br></br>
                            <span>Weather</span>
                            </Link>
                    </Col>

                    <Col>
                        <span role='img' aria-label='#'>🖩</span>
                        <br></br>
                        <span>Calculator</span>
                     </Col> 
                </Row>
            
           
               <Footer/>
            </Container>
            
            

        </div>
 
    )
  }


export default MainScreen