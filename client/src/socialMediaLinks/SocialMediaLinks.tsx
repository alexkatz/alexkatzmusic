import React from 'react';
import { css } from '@emotion/core';
import { SocialMediaLink } from './SocialMediaLink';
import spotifySvg from '../assets/vector/spotify-logo.svg';
import appleSvg from '../assets/vector/apple-music-logo.svg';
import youtubeSvg from '../assets/vector/youtube-logo.svg';
import bandcampSvg from '../assets/vector/bandcamp-logo.svg';
import googleSvg from '../assets/vector/google-play-logo.svg';
import { Constants } from '../shared/constants';
import { screenWidthAt } from '../shared/utils';



export const SocialMediaLinks: React.FC = props => (
  <div
    css={css`
      width: 100%;
    `}
    {...props}
  >
    {
      [[spotifySvg, appleSvg, googleSvg], [youtubeSvg, bandcampSvg]].map((svgs, svgsIndex) => (
        <div
          css={css`
          display: flex;
          justify-content: center;
          ${svgsIndex === 0 && css`
            margin-bottom: ${Constants.SIXTEEN}px;
          `}
        `}
        >
          {
            svgs.map((svg, svgIndex) => (
              <SocialMediaLink
                key={svgIndex}
                svg={svg}
                css={css`
                  height: 30px;
                  opacity: 0.4;
    
                  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
                    height: 20px;
                  }
    
                  ${screenWidthAt(400)} {
                    height: 15px;
                  }
    
                  ${svg === appleSvg && css`
                    position: relative;
                    top: -1px;
                  `}
    
                  ${svg === spotifySvg && css`
                    position: relative;
                    top: 2px;
                  `}
    
                  ${svgIndex !== svgs.length - 1 && css`
                    margin-right: 10%;
                  `}
                `}
              />
            ))
          }
        </div>
      ))
    }
  </div>
);
