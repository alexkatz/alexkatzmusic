import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';
import { screenWidthAt } from '../shared/utils';
import { SocialMediaLink } from '../socialMediaLinks/SocialMediaLink';

import { motion } from 'framer-motion';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';

const MARGIN_LEFT_RIGHT = css`
  margin-left: ${Constants.SIXTEEN}px;
  margin-right: ${Constants.SIXTEEN}px;
`;

export const Music: React.FC = () => (
  <div
    css={css`
      grid-row-start: 2;
      display: grid;
      grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
      color: ${Color.WHITE};
      text-shadow: ${Constants.TEXT_SHADOW};;
      font-size: ${Constants.TWENTY_FOUR}px;
      justify-items: center;
      grid-template-rows: min-content min-content auto;
      padding-top: ${Constants.SIXTY_FOUR}px;

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
        grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
      } 

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
        grid-template-columns: auto [content-column-start] ${Constants.MEDIA_BREAKPOINTS.MOBILE} [content-column-end] auto;  
        padding-top: ${Constants.THIRTY_TWO}px;
      }

      ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
        grid-template-columns: [content-column-start] auto [content-column-end];
      }
    `}
  >

    <SocialMediaLinks
      css={css`
        grid-column-start: content-column-start;
        margin-bottom: ${Constants.SIXTY_FOUR}px;

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          margin-bottom: ${Constants.THIRTY_TWO}px;
        }
      `}
    />
    <motion.img
      css={css`
        grid-column-start: content-column-start;
        width: 55%;
        ${MARGIN_LEFT_RIGHT};
        margin-bottom: ${Constants.SIXTY_FOUR}px;
        border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
        box-shadow: ${Constants.TEXT_SHADOW};

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          margin-bottom: ${Constants.THIRTY_TWO}px;
        }
      `}
      src={rollingBlueAlbumCover}
      whileHover={{ scale: 1.005 }}
      transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
    />
    <div
      css={css`
        grid-column-start: content-column-start;
        ${MARGIN_LEFT_RIGHT};

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          font-size: 14px
        }
      `}
    >
      <p>
        Hey, Alex here. I made a record.
      </p>
      <p>
        It's about drifting. Through air. Through water. Through memory. (And through lame metaphor, apparently).
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
);