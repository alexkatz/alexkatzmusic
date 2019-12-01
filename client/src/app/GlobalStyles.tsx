import React from 'react';
import { Global, css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { Color } from '../shared/colors';
import muliExtraLight from '../fonts/Muli-ExtraLight.ttf';
import muliRegular from '../fonts/Muli-Regular.ttf';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Muli-ExtraLight';
        src: url(${muliExtraLight});
      }

      @font-face {
        font-family: 'Muli-Regular';
        src: url(${muliRegular});
      }

      html, body, #root {
        height: 100%;
        margin: 0;
      }

      body {
        background: linear-gradient(180deg, ${Color.LIGHT_BLUE_BACKGROUND} 0%, ${Color.DARK_BLUE_BACKGROUND} 100%);
        font-family: 'Muli-ExtraLight';
      }

      #root {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto;
        justify-items: center;
        align-items: center;
      }
    `}
  />
);