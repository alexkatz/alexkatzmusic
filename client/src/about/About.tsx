import React from 'react';
import { css } from '@emotion/core';
import { Color } from '../shared/colors';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.jpg';
import { screenWidthAt } from '../shared/utils';
import { Constant } from '../shared/constants';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

export const About: React.FC = () => {
  const history = useHistory();
  return (
    <div
      css={css`
        grid-row-start: 2;
        display: grid;
        grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
        color: ${Color.WHITE};
        text-shadow: ${Constant.TEXT_SHADOW};
        height: 80%;
        align-items: center;

        ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
        }

        ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.TABLET)} {
          grid-template-columns: auto [content-column-start] 578px [content-column-end] auto;  
        }

        ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.MOBILE)} {
          align-items: flex-start;
          grid-template-columns: [content-column-start] auto [content-column-end];  
        }
    `}
    >
      <div
        css={css`
          grid-column: content-column-start;
          display: grid;
          grid-template-rows: auto 1fr;

          ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
            font-size: 15px;
          }
          
          ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.TABLET)} {
            font-size: 14px;
          }

          ${screenWidthAt(600)} {
            font-size: 13px;
          }
        `}
      >
        <div
          css={css`
            padding-left: ${Constant.SIXTEEN}px;
            padding-right: ${Constant.SIXTEEN}px;
          `}
        >
          <motion.img
            css={css`
              grid-column-start: album-start;
              width: 60%;
              float: right;
              margin-bottom: ${Constant.SIXTEEN}px;
              margin-left: ${Constant.THIRTY_TWO}px;
              box-shadow: ${Constant.TEXT_SHADOW};
              cursor: pointer;
            `}
            onClick={() => history.push('/')}
            src={rollingBlueAlbumCover}
            whileHover={{ scale: 1.01 }}
            transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
          />
          <p>
            Hey, Alex here.
          </p>
          <p>
            Long overdue, but I just made my first record.
          </p>
          <p>
            It's got loads of reverb and delay. It's got heavy seven string guitar. Blast beats. Birds and waves. Forest and space. Cello. Violin. Piano. Banjo. It's dense at times, soft at others. Ethereal always.
          </p>
          <p>
            It's a musical adventure I put my heart into,
            spanning from banjo-infused progressive metal to vast acoustic ambience,
            immersive soundscapes, psychedelic rock, electronic grooves,
            bossa nova, and orchestral arrangements.
          </p>
          <p>
            Give it a spin. Oh, and stay tuned for more music to come. 🤘
          </p>
        </div>
      </div>
    </div>
  );
};
