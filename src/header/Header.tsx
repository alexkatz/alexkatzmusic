import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';

export const Header: React.FC = () => (
  <div
    css={css`
      grid-row-start: 1;
      grid-column-start: 1;
      padding: ${Constants.PADDING}px;
      color: white;
      font-size: 40px;
    `}
  >
    <span>
      alex katz
    </span>
  </div>
);