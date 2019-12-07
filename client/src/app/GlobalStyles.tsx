import React from 'react';
import { Global, css } from '@emotion/core';
import { Color } from '../shared/colors';
import muliExtraLight from '../assets/font/Muli-ExtraLight.ttf';
import muliRegular from '../assets/font/Muli-Regular.ttf';
import { Constants } from '../shared/constants';
import budapestFerrisWheelImage from '../assets/image/budapestferriswheel.jpg';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';

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

      #background-image-container {
        filter: blur(16px);
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: -1;
      }

      #background-image {
        width: 100%;
        height: 100%;
        background-image: url(${rollingBlueAlbumCover});
        background-size: cover;
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
        grid-template-rows: ${Constants.HEADER_SIZE}px auto;
        grid-template-columns: auto;
      }
    `}
  />
);