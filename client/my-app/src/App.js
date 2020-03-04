import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './presentationals/MainScreen'
import AddressViewComp from './containers/AddressContainer/AddressViewComp'
import AddressNew from './containers/AddressContainer/AddressNew'
import AddressShow from './containers/AddressContainer/AddressShow';
import MemoNew from './containers/MemoContainer/MemoNew'
import MemoIndex from './containers/MemoContainer/MemoIndex'
import MemoShow from './containers/MemoContainer/MemoShow'
import ToDoNew from './containers/ToDoContainer/ToDoNew'
import ToDoIndex from './containers/ToDoContainer/ToDoIndex'
import Footer from './presentationals/Footer'  

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path='/' component={MainScreen} />
          <Route exact path='/addressView' component={AddressViewComp} />
          <Route exact path='/addressNew' component={AddressNew} />
          <Route exact path='/addressShow/:id' component={AddressShow}/>
          <Route exact path='/MemoNew' component={MemoNew}/>
          <Route exact path='/MemoIndex' component={MemoIndex} />
          <Route exact path='/memoShow/:id' component={MemoShow} /> 
          <Route exact path='/ToDoNew' component={ToDoNew}/>
          <Route exact path='/ToDoIndex' component={ToDoIndex} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;