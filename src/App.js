import React from 'react';
import Home from './pages/Home';
import Contribute from './pages/Contribute';
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
      </Switch>
    </div>
  );
}

export default App;
