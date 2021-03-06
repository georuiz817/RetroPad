import React, { useState} from 'react';
import { Container, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MemoNew = () => {

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const history = useHistory();

    let handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3000/memos', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  title,
                  note
              })
          })
          .then(res => res.json())
      history.push('/MemoIndex');
  }
  
  return (
      <div>
      <Container>
        <Col>
            <p className="heading-title"> Add Memo</p>
            <div className="form-group">
                <form className="form-bar" onSubmit={handleSubmit}>
                <input className="form-control" type="text" value={title} placeholder="Memo Title" name="firstName" onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="form-control" type="text" value={note} placeholder="Memo Text" name="firstName" onChange={(e) => setNote(e.target.value)}/>
                
                <input className="btn btn-warning" type="submit" value="Create Memo!" />
                </form>

            </div>
         </Col>
        </Container>
      </div>
        )
  }

export default MemoNew