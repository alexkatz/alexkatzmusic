import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';
import { motion } from 'framer-motion';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';

const blurbTextCss = css`
  padding-right: ${Constants.MARGIN}px;
`;

export const Music: React.FC = () => (
  <div
    css={css`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: ${Constants.HEADER_SIZE}px auto ${Constants.ALBUM_COVER_SIZE}px ${Constants.HEADER_SIZE}px;
    grid-template-rows: ${Constants.HEADER_SIZE}px 120px 120px auto;
    color: ${Color.WHITE};
    text-shadow: ${Constants.TEXT_SHADOW};
    font-size: 24px;
  `}
  >
    {/* <SocialMediaLinks
      css={css`
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
      `}
    /> */}
    <div
      css={css`
        grid-column-start: 2;
        grid-row-start: 2;
        ${blurbTextCss}
      `}
    >
      Hey everyone! I recently released my debut album, Rolling Blue. Check it out at any of the platforms above.
    </div>
    <div
      css={css`
        grid-column-start: 2;
        grid-row-start: 4;
        ${blurbTextCss}
      `}
    >
      Some other text. Whatever.
    </div>
    <motion.img
      css={css`
        grid-column-start: 3;
        grid-row-start: 2;
        width: ${Constants.ALBUM_COVER_SIZE}px;
        height: ${Constants.ALBUM_COVER_SIZE}px;
        border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
        box-shadow: ${Constants.TEXT_SHADOW};
        cursor: pointer;
      `}
      src={rollingBlueAlbumCover}
      whileHover={{ scale: 1.01 }}
      transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
    />
  </div>
);