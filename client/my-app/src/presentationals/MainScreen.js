import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainScreen = () => {
    return (
        <div className="screen">
            <Container>
            
                <Row>
                    
                        <Col>
                        <Link to="/addressView">
                            <span>📞</span>
                            <br></br>
                            <span>Address</span>
                        </Link>
                        </Col>
                     

                    <Col>
                        <span>📝</span>
                        <br></br>
                        <span>Memo Pad</span>
                    </Col>

         
                </Row>
                 
                    
                <Row>
                    <Col>
                        <Link to='weather'>
                            <span>❄️</span>
                            <br></br>
                            <span>Weather</span>
                            </Link>
                    </Col>

                    <Col>
                        <span>🖩</span>
                        <br></br>
                        <span>Calculator</span>
                     </Col> 
                </Row>
            

            </Container>

        </div>
 
    )
  }


export default MainScreen