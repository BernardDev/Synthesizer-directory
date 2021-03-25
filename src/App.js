import React from 'react';
import Home from './pages/Home';
import Contribute from './pages/Contribute';
import RegisterLogin from './pages/RegisterLogin';
import Admin from './pages/Admin';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contribute'>
          <Contribute />
        </Route>
        <Route path='/admins'>
          <RegisterLogin />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
