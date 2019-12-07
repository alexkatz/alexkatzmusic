import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Music } from '../music/Music';
import { Production } from '../production/Production';
import { Apps } from '../apps/Apps';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <div id="background-image-container">
        <div id="background-image" />
      </div>
      <Route path='/:headerItemValue?' component={Header} />
      <Switch>
        <Route path='/production' component={Production} />
        <Route path='/apps' component={Apps} />
        <Route path='/' component={Music} />
      </Switch>
    </Router>
  </>
);
