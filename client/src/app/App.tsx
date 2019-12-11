import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';
import { Music } from '../music/Music';
import { Studio } from '../studio/Studio';
import { Apps } from '../apps/Apps';
import { HeaderItemName } from '../shared/HeaderItemName';
import { About } from '../about/About';

export const App: React.FC = () => (
  <>
    <Router>
      <div id="background-image-container">
        <div id="background-image" />
      </div>
      <Route path='/:headerItemValue?' component={Header} />
      <Switch>
        <Route path={`/${HeaderItemName.STUDIO}`} component={Studio} />
        <Route path={`/${HeaderItemName.APPS}`} component={Apps} />
        <Route path={`/${HeaderItemName.ABOUT}`} component={About} />
        <Route path='/' component={Music} />
      </Switch>
    </Router>
    <GlobalStyles />
  </>
);
