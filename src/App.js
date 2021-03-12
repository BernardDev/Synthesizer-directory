import React from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:synth_id'>
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
