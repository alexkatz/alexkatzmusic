import React from 'react';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.jpg';
import { Color } from '../shared/colors';
import { screenWidthAt } from '../shared/utils';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { useHistory } from 'react-router-dom';

const MARGIN_LEFT_RIGHT = css`
  margin-left: ${Constants.SIXTEEN}px;
  margin-right: ${Constants.SIXTEEN}px;
`;

export const Music: React.FC = () => {
  const history = useHistory();
  return (
    <div
      css={css`
        grid-row-start: 2;
        display: grid;
        grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
        color: ${Color.WHITE};
        text-shadow: ${Constants.TEXT_SHADOW};;
        font-size: ${Constants.TWENTY_FOUR}px;
        justify-items: center;
        grid-template-rows: 100% min-content min-content;

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
        } 

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
          grid-template-columns: auto [content-column-start] ${Constants.MEDIA_BREAKPOINTS.MOBILE} [content-column-end] auto;  
        }

        ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
          grid-template-columns: [content-column-start] auto [content-column-end];
        }
      `}
    >
      <div
        css={css`
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: content-column-start;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          width: 100%;
          padding-top: ${Constants.SIXTY_FOUR}px;
        `}
      >
        <SocialMediaLinks css={css`margin-bottom: ${Constants.SIXTY_FOUR}px;`} />
        <motion.img
          css={css`
            width: 45%;
            ${MARGIN_LEFT_RIGHT};
            border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
            box-shadow: ${Constants.TEXT_SHADOW};
            cursor: pointer;
          `}
          onClick={() => history.push('/about')}
          src={rollingBlueAlbumCover}
          whileHover={{ scale: 1.005 }}
          transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
        />
      </div>
      <div
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          padding-left: ${Constants.SIXTEEN}px;
          padding-right: ${Constants.SIXTEEN}px;
          font-size: 14px;
          text-shadow: ${Constants.TEXT_SHADOW};

          ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
            font-size: 10px;
          }
        `}
      >
        <p>Personnel:</p>
        <p>Alex Katz - guitars, bass, drum programming, vocals, piano, synthesizer, banjo, tzouras, engineering, production</p>
        <p>Ruth Miyamoto - cello</p>
        <p>Ethan DuBois - violin</p>
      </div>
    </div>
  );
};
