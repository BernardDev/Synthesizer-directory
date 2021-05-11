import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import Contribute from './pages/Contribute';
import RegisterLogin from './pages/RegisterLogin';
import Admin from './pages/Admin';
import {Switch, Route} from 'react-router-dom';
import {TokenProvider} from './context/store';
import Navigation from './components/Navigation';

function App() {
  return (
    <Container className='App'>
      <Spacer />
      <Navigation />
      <TokenProvider>
        <Switch>
          <Container>
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
          </Container>
        </Switch>
      </TokenProvider>
    </Container>
  );
}

const Spacer = styled.div`
  height: 12vh;
`;

const Container = styled.div`
  margin: 0 auto;
`;

export default App;
