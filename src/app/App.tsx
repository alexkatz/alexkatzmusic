import React from 'react';
import { css } from '@emotion/core';
import { GlobalStyles } from './GlobalStyles';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <div
      css={css`
      color: blue;
    `}
    >
      hey world or whatever
    </div>
  </>
);
