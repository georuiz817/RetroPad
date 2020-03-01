import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../presentationals/Footer'
import { Link } from 'react-router-dom';

const MemoIndex = () => {

  const [Memos, setMemos] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/memos')
    .then(res => res.json())
    .then(setMemos) 
   }, []);

 
   
   return (
            <div  className="Memo-list-screen">
              <Container>
                <p id="memo-title">Memos<span id="add"><Link to='MemoNew'>+</Link></span></p> 
                  <Row>
                    <ul>
                     {Memos.map(memo => <div className="mapClass" key={memo.id}><ul><Link to={`/MemoShow/${memo.id}`}><li>{memo.title}</li></Link></ul></div>)}
                     </ul>
                  </Row>
                  
              <Footer/>
              </Container>
            </div>
            )
          }

          export default MemoIndex