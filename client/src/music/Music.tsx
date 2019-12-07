import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';

export const Music: React.FC = () => (
  <div
    css={css`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: ${Constants.HEADER_SIZE}px auto ${Constants.ALBUM_COVER_SIZE}px ${Constants.HEADER_SIZE}px;
    grid-template-rows: ${Constants.HEADER_SIZE}px auto;
  `}
  >
    <img
      css={css`
        grid-column-start: 3;
        grid-row-start: 2;
        width: ${Constants.ALBUM_COVER_SIZE}px;
        height: ${Constants.ALBUM_COVER_SIZE}px;
        border: 4px solid ${Color.DARK_BLUE_BACKGROUND};
      `}
      src={rollingBlueAlbumCover}
    />
  </div>
);