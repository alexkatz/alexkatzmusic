import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';
import { motion } from 'framer-motion';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { mediaAt } from '../shared/utils';

export const Music: React.FC = () => (
  <div
    css={css`
    grid-row-start: 2;
    display: grid;
    grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
    grid-template-rows: [album-row-start] auto;
    color: ${Color.WHITE};
    text-shadow: ${Constants.TEXT_SHADOW};
    font-size: 24px;

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
      grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
    }

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
      grid-template-columns: auto [content-column-start] 578px [content-column-end] auto;  
    }

    ${mediaAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
      grid-template-columns: [content-column-start] auto [content-column-end];  
    }
  `}
  >
    <div
      css={css`
        margin-top: 50px;
        grid-column: content-column-start;
        grid-row: album-row-start;
        display: grid;
        grid-template-columns: [text-start] 50% [album-start] 50% [album-end];
        grid-template-rows: auto 1fr;

        ${mediaAt(1200)} {
          font-size: 20px;
        }
        
        ${mediaAt(850)} {
          font-size: 14px;
        }

        ${mediaAt(578)} {
          font-size: 12px;
          margin-top: 0;
        }
      `}
    >
      <div
        css={css`
          grid-column-start: text-start;
          margin-left: ${Constants.MARGIN}px;
          margin-right: ${Constants.MARGIN}px;
        `}
      >
        <p>
          Hey everyone! I recently released my debut album, Rolling Blue.
        </p>
        <p>
          It's about floating. It's got loads of reverb and delay. It's dense and ethereal at times, soft and ethereal at others.
        </p>
        <p>
          It's a musical adventure I put my heart into,
          spanning from banjo-infused progressive metal to vast acoustic ambience,
          immersive soundscapes, psychedelic rock, electronic grooves,
          bossa nova, and orchestral arrangements.
        </p>
        <p>
          That's all for now! Stay tuned for more releases to come.
        </p>
      </div>
      <div
        css={css`
          margin-right: ${Constants.MARGIN}px;
        `}
      >
        <motion.img
          css={css`
            grid-column-start: album-start;
            width: 100%;
            border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
            box-shadow: ${Constants.TEXT_SHADOW};
            margin-right: -${Constants.PADDING}px;
            cursor: pointer;
          `}
          src={rollingBlueAlbumCover}
          whileHover={{ scale: 1.01 }}
          transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
        />
      </div>
      {/* <div
        css={css`
        grid-row-start: 2;
        grid-column-start: text-start;
        grid-column-end: album-end;
        background-color: orange;
        height: 100px;
      `}
      >

      </div> */}
    </div>
  </div>
);