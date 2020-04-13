import React, { useState, useEffect} from 'react';
import { Container, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const MemoShow = (props) => {
    const [Memo, setMemo] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        let id = props.match.params.id;
        fetch('http://localhost:3000/memos/' + id)
        .then(res => res.json())
        .then(setMemo) 
       }, [props.match.params.id]);


    let  deleteMemo = (e) => {
            e.preventDefault()
            let id = props.match.params.id;
            fetch('http://localhost:3000/memos/' + id, {
              method: "DELETE" 
            })
            history.push('/MemoIndex')
        } 
        
    return (
        <div className="show-details">
            <Container>
      
                    <Col>
                    <p><u>{Memo.title}</u></p>
                    <p>{Memo.note}</p>
                    <hr></hr>
                    <button onClick={deleteMemo}><span role='img' aria-label='trash'>🗑️</span></button>
                    </Col>
            
            </Container>
        </div>
        )
    }

export default MemoShow