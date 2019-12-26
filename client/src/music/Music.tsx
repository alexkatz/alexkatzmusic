import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { Color } from '../shared/colors';
import { screenWidthAt } from '../shared/utils';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { AlbumCover } from './AlbumCover';
import { useWindowSize } from '../shared/hooks/useWindowSize';

const portraitColumns = css`
  grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
    grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
  } 

  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
    grid-template-columns: auto [content-column-start] ${Constants.MEDIA_BREAKPOINTS.MOBILE} [content-column-end] auto;  
  }

  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
    grid-template-columns: [content-column-start] auto [content-column-end];
  }
`

const landscapeColumns = css`
  grid-template-columns: 50% 50%;
`;
export const Music: React.FC = () => {
  const { width, height } = useWindowSize();
  const isLandscape = height / width <= 0.5;
  return (
    <div
      css={css`
        grid-row-start: 2;
        display: grid;
        ${portraitColumns};
        color: ${Color.WHITE};
        text-shadow: ${Constants.TEXT_SHADOW};;
        font-size: ${Constants.TWENTY_FOUR}px;
        justify-items: center;
      `}
    >
      <div
        css={css`
          grid-column-start: content-column-start;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          padding-top: ${Constants.THIRTY_TWO}px;
          overflow: hidden;
        `}
      >
        <SocialMediaLinks css={css`margin-bottom: ${Constants.SIXTY_FOUR}px;`} />
        <div
          css={css`
            flex-grow: 1;
            margin-bottom: ${Constants.THIRTY_TWO}px;
            width: 100%;
            height: 100%;
            overflow: visible;
          `}
        >
          <AlbumCover maxSize={900} />
        </div>
      </div>
    </div>
  );
};
