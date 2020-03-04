import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MainScreen = () => {
    return (
        <div className="screen">
            <Container id="screen">
       
                    
                        <Col>
                        <Link to="/addressView">
                            <span role='img' aria-label='#'>📞</span>
                            <br></br>
                            <span>Address</span>
                        </Link>
                        </Col>
                     

                    <Col>
                    <Link to='/MemoIndex'>
                        <span role='img' aria-label='#'>📝</span>
                        <br></br>
                        <span>Memo Pad</span>
                        </Link>
                    </Col>

          
                 
                    
               
                    <Col>
                        <Link to='weather'>
                            <span role='img' aria-label='#'>❄️</span>
                            <br></br>
                            <span>Weather</span>
                            </Link>
                    </Col>

                    <Col>
                    <Link to='ToDoIndex'>
                        <span role='img' aria-label='#'>✏️</span>
                        <br></br>
                        <span>To Do list</span>
                    </Link>
                     </Col> 
            
           
           
            </Container>
            
            

        </div>
 
    )
  }


export default MainScreen