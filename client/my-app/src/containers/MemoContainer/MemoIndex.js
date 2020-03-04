import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
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
            <div>
              <Container>
                <p className="heading-title">Memos<span id="add"><Link to='MemoNew'>+</Link></span></p> 
             
                    <ul>
                     {Memos.map(memo => 
                      <div key={memo.id}>
                        <Link to={`/MemoShow/${memo.id}`}>
                          <li className="list-off">{memo.title}</li>
                        </Link>
                      </div>)}
                    </ul>
              
                  
              <Footer/>
              </Container>
            </div>
            )
          }

          export default MemoIndex