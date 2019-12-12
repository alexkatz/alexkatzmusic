import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.png';
import { Color } from '../shared/colors';
import { screenWidthAt } from '../shared/utils';
import { SocialMediaLink } from '../socialMediaLinks/SocialMediaLink';
import spotifySvg from '../assets/vector/spotify-logo.svg';
import appleSvg from '../assets/vector/apple-music-logo.svg';
import youtubeSvg from '../assets/vector/youtube-logo.svg';
import bandcampSvg from '../assets/vector/bandcamp-logo.svg';
import googleSvg from '../assets/vector/google-play-logo.svg';

export const Music: React.FC = () => (
  <div
    css={css`
      grid-row-start: 2;
      display: grid;
      margin-top: 64px;
      grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;  
      grid-template-rows: [social-media-row-one-start] auto 32px [social-media-row-two-start] auto 1fr;
      color: ${Color.WHITE};
      text-shadow: ${Constants.TEXT_SHADOW};
      font-size: 24px;
      justify-items: center;

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
    {
      [[spotifySvg, appleSvg, youtubeSvg], [bandcampSvg, googleSvg]].map((svgs, svgsIndex) => (
        <div
          key={svgsIndex}
          css={css`
          grid-column-start: content-column-start;
          grid-row-start: ${svgsIndex === 0 ? 'social-media-row-one-start' : 'social-media-row-two-start'};
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 50%;
          /* background-color: rgba(0, 0, 0, .1); */
        `}
        >

          {
            svgs.map((svg, index) => (
              <SocialMediaLink
                key={index}
                css={css`
                  height: 30px;
                  opacity: 0.4;

                  ${svg === appleSvg && (css`
                    position: relative;
                    top: -4px;
                  `)}

                ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
                  height: 30px;
                }

                ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
                  height: 25px;
                }

                ${screenWidthAt(330)} {
                  width: 70px;
                }
              `}
                svg={svg}
              />
            ))
          }
        </div>
      ))
    }
  </div>
);