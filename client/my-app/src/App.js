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

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={MainScreen} />
          <Route exact path='/addressView' component={AddressViewComp} />
          <Route exact path='/addressNew' component={AddressNew} />
          <Route exact path='/addressShow/:id' component={AddressShow}/>
          <Route exact path='/MemoNew' component={MemoNew}/>
          <Route exact path='/MemoIndex' component={MemoIndex} />
          <Route exact path='/memoShow/:id' component={MemoShow} /> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;