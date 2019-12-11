import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';
import { motion } from 'framer-motion';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { mediaAt } from '../shared/utils';

const GridLine = {
  CONTENT_COLUMN_START: 'content-column-start',
  CONTENT_COLUMN_END: 'content-column-end',
}

export const Music: React.FC = () => (
  <div
    css={css`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: auto [${GridLine.CONTENT_COLUMN_START}] 1200px [${GridLine.CONTENT_COLUMN_END}] auto;  
    color: ${Color.WHITE};
    text-shadow: ${Constants.TEXT_SHADOW};
    font-size: 24px;

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
      grid-template-columns: auto [${GridLine.CONTENT_COLUMN_START}] 85% [${GridLine.CONTENT_COLUMN_END}] auto;  
    }

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
      grid-template-columns: auto [${GridLine.CONTENT_COLUMN_START}] 578px [${GridLine.CONTENT_COLUMN_END}] auto;  
    }

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
      grid-template-columns: [${GridLine.CONTENT_COLUMN_START}] auto [${GridLine.CONTENT_COLUMN_END}];  
    }
  `}
  >
    <div
      css={css`
        margin-top: 50px;
        grid-column: ${GridLine.CONTENT_COLUMN_START};
        display: grid;
        grid-template-rows: auto 1fr;

        ${mediaAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          font-size: 20px;
        }
        
        ${mediaAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          font-size: 14px;
        }

        ${mediaAt(600)} {
          font-size: 12px;
          margin-top: 0;
        }
      `}
    >
      <div
        css={css`
          padding-left: ${Constants.SIXTEEN}px;
          padding-right: ${Constants.SIXTEEN}px;
        `}
      >
        <motion.img
          css={css`
            grid-column-start: album-start;
            width: 50%;
            float: right;
            margin-bottom: ${Constants.SIXTEEN}px;
            margin-left: ${Constants.SIXTEEN}px;
            border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
            box-shadow: ${Constants.TEXT_SHADOW};
            cursor: pointer;
          `}
          src={rollingBlueAlbumCover}
          whileHover={{ scale: 1.01 }}
          transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
        />
        <p css={css`margin-top: 0;`}>
          Hey everyone! I've recently released my first album, Rolling Blue.
        </p>
        <p>
          It's about drifting. Through air. Through water. Through memory. Through lame metaphor, for sure.
        </p>
        <p>
          It's got loads of reverb and delay. It's got heavy 7 string guitar. Blast beats. It's got beach sounds. Cello. Violin. Piano. Banjo. It's dense at times, soft at others. Ethereal always.
        </p>
        <p>
          It's a musical adventure I put my heart into,
          spanning from banjo-infused progressive metal to vast acoustic ambience,
          immersive soundscapes, psychedelic rock, electronic grooves,
          bossa nova, and orchestral arrangements.
        </p>
        <p>
          Check it out on all platforms. And stay tuned for more music to come. 🤘
        </p>
      </div>
    </div>
  </div>
);