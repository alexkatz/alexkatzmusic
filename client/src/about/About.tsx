import React from 'react';
import { css } from '@emotion/core';
import { Color } from '../shared/colors';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { screenWidthAt } from '../shared/utils';
import { Constants } from '../shared/constants';
import { motion } from 'framer-motion';

export const About: React.FC = () => (
  <div
    css={css`
      grid-row-start: 2;
      display: grid;
      grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
      color: ${Color.WHITE};
      text-shadow: ${Constants.TEXT_SHADOW};
      font-size: 24px;

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
        grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
      }

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
        grid-template-columns: auto [content-column-start] 578px [content-column-end] auto;  
      }

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
        grid-template-columns: [content-column-start] auto [content-column-end];  
      }
  `}
  >
    <div
      css={css`
        margin-top: 50px;
        grid-column: content-column-start;
        display: grid;
        grid-template-rows: auto 1fr;

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          font-size: 20px;
        }
        
        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          font-size: 14px;
        }

        ${screenWidthAt(600)} {
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
