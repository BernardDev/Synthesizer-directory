import React, {useState} from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Navigation from './components/Navigation';
import useFetchManufacturers from './hooks/useFetchManufacturers';
import {Switch, Route} from 'react-router-dom';

function App() {
  // query -> Home -> useFetchSynths
  // page -> Home -> useFetchSynths // not needed
  // manufacturers -> Home -> useFetchSynths
  // query -> Navigation -> Options
  // handleSearch -> Navigation -> Options

  return (
    <div className='App'>
      <Switch>
        {/* {...props} */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:synth_id'>
          <Details
          // query={query}
          // manufacturers={manufacturers}
          // handleSearch={handleSearch}
          />
        </Route>
      </Switch>
    </div>
  );
}

{
  /* <Route path='/' exact render={(props) => <Home test='hi' {...props} />} />; */
}

export default App;
