import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Music } from '../music/Music';
import { Studio } from '../production/Production';
import { Apps } from '../apps/Apps';
import { HeaderItemName } from '../shared/HeaderItemName';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <div id="background-image-container">
        <div id="background-image" />
      </div>
      <Route path='/:headerItemValue?' component={Header} />
      <Switch>
        <Route path={`/${HeaderItemName.STUDIO}`} component={Studio} />
        <Route path={`/${HeaderItemName.APPS}`} component={Apps} />
        <Route path='/' component={Music} />
      </Switch>
    </Router>
  </>
);
