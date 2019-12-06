import React from 'react';
import { Global, css } from '@emotion/core';
import { Color } from '../shared/colors';
import muliExtraLight from '../assets/font/Muli-ExtraLight.ttf';
import muliRegular from '../assets/font/Muli-Regular.ttf';

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

      * {
        cursor: default;
      }

      #root {
        display: grid;
        grid-template-rows: 100px 300px auto;
        grid-template-columns: auto;
      }
    `}
  />
);