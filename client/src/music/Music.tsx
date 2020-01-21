import React from 'react';
import { css } from '@emotion/core';
import { Constant } from '../shared/constants';
import { Color } from '../shared/colors';
import { SocialMediaMusicLinks } from '../socialMediaLinks/SocialMediaMusicLinks';
import { AutoSizer } from 'react-virtualized';
import { YouTubeDebounced } from '../shared/YouTubeDebounced';
import { Style } from '../shared/styles';

export const Music: React.FC = () => {
  return (
    <div
      css={css`
        grid-row-start: 2;
        display: grid;
        ${Style.RESPONSIVE_CENTER_COLUMN};
        color: ${Color.WHITE};
        text-shadow: ${Constant.TEXT_SHADOW};;
        font-size: ${Constant.TWENTY_FOUR}px;
        justify-items: center;
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
          padding-top: ${Constant.THIRTY_TWO}px;
        `}
      >
        <SocialMediaMusicLinks css={css`margin-bottom: ${Constant.SIXTY_FOUR}px;`} />
        <div
          css={css`
            margin-bottom: ${Constant.THIRTY_TWO}px;
            width: 100%;
            height: 100%;
            overflow: visible;
            display: flex;  
          `}
        >
          <AutoSizer disableHeight>
            {
              ({ width }) => {
                const height = width * (9 / 16);
                return width === 0 ? null : (
                  <div style={{ width, height, backgroundColor: 'black' }}>
                    <YouTubeDebounced
                      videoId='sNN99t8exSw'
                      width={width}
                      height={height}
                    />
                  </div>
                );
              }
            }
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};
