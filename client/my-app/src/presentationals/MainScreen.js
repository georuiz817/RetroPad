import React from 'react'
import { Container,  Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

const MainScreen = () => {
    return (
        <div className="screen">
            <Container id="screen">
                <Col>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/addressView">
                        <span role='img' aria-label='#'>📞</span>
                        <br></br>
                        <span>Address</span>
                    </Link>
                </Col>
                
                <Col>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/MemoIndex'>
                        <span role='img' aria-label='#'>📝</span>
                        <br></br>
                        <span>Memo Pad</span>
                    </Link>
                </Col>

                <Col>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='ToDoIndex'>
                        <span role='img' aria-label='#'>✏️</span>
                        <br></br>
                        <span>To Do list</span>
                    </Link>
                </Col> 


                <Col>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='About'>
                        <span role='img' aria-label='#'>⚠️</span>
                        <br></br>
                        <span>About</span>
                    </Link>
                </Col>
            </Container>
        </div>
        )
    }


export default MainScreen