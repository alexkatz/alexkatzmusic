import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../home/Home';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
          yo
        </Route>
      </Switch>
    </Router>
  </>
);
