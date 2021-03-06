import React from 'react';
import { css } from '@emotion/core';
import { Color } from '../shared/colors';

export const Studio: React.FC = () => (
  <div
    css={css`
      grid-row-start: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${Color.WHITE};
    `}
  >
    content coming soon. 🤘
  </div >
);
