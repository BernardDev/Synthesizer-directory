import React, {useState} from 'react';
import Home from './pages/Home';
import Contribute from './pages/Contribute';
import RegisterLogin from './pages/RegisterLogin';
import Admin from './pages/Admin';
import {Switch, Route} from 'react-router-dom';
import {TokenProvider} from './context/store';

function App() {
  return (
    <div className='App'>
      <TokenProvider>
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
          <Route path='/suggestions'>
            <Admin />
          </Route>
        </Switch>
      </TokenProvider>
    </div>
  );
}

export default App;
