import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const MainScreen = () => {
    return (
        <div className='Outer-Screen'>
            <Container className='Inner-Screen'>
                <Row>
                    <Col className='Main-Screen-Col' sm={12}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/addressView">
                            <span role='img' aria-label='#'>📞</span>
                            <br></br>
                            <span>Address</span>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='Main-Screen-Col' sm={12}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/MemoIndex'>
                            <span role='img' aria-label='#'>📝</span>
                            <br></br>
                            <span>Memo Pad</span>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='Main-Screen-Col' sm={12}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='ToDoIndex'>
                            <span role='img' aria-label='#'>✏️</span>
                            <br></br>
                            <span>To Do list</span>
                        </Link>
                    </Col> 
                </Row>
                <Row>
                    <Col className='Main-Screen-Col' sm={12}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='About'>
                            <span role='img' aria-label='#'>⚠️</span>
                            <br></br>
                            <span>About</span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }

export default MainScreen