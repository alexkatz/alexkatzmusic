import React from 'react';
import { css } from '@emotion/core';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../header/Header';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
  </>
);
