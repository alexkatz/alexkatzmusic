import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { Color } from '../shared/colors';
import { screenWidthAt } from '../shared/utils';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { AlbumCover } from './AlbumCover';
import { AutoSizer } from 'react-virtualized';
import { YouTubeDebounced } from '../shared/YouTubeDebounced';

export const Music: React.FC = () => {
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
          grid-column-start: content-column-start;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding-top: ${Constants.THIRTY_TWO}px;
        `}
      >
        <SocialMediaLinks css={css`margin-bottom: ${Constants.SIXTY_FOUR}px;`} />
        <div
          css={css`
            margin-bottom: ${Constants.THIRTY_TWO}px;
            width: 100%;
            height: 100%;
            overflow: visible;
            display: flex;
          `}
        >
          <AutoSizer disableHeight>
            {
              ({ width }) => {
                return (
                  <YouTubeDebounced
                    videoId='sNN99t8exSw'
                    width={width}
                    height={width * (9 / 16)}
                  />
                );
              }
            }
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};
