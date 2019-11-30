import React from 'react';
import { Global, css } from '@emotion/core';
import { Constants } from '../shared/constants';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      body {
        display: grid;
        margin: ${Constants.PADDING}px;
      }
    `}
  />
);