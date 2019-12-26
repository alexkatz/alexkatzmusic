import React from 'react';
import { css } from '@emotion/core';
import { SocialMediaLink } from './SocialMediaLink';
import spotifySvg from '../assets/vector/spotify-logo.svg';
import appleSvg from '../assets/vector/apple-music-logo.svg';
import youtubeSvg from '../assets/vector/youtube-logo.svg';
import bandcampSvg from '../assets/vector/bandcamp-logo.svg';
import googleSvg from '../assets/vector/google-play-logo.svg';
import instagramSvg from '../assets/vector/instagram-logo.svg';
import facebookSvg from '../assets/vector/facebook-logo.svg';
import { Constants } from '../shared/constants';
import { screenWidthAt } from '../shared/utils';

const SOCIAL_MEDIA_LINKS: { svg: string; url: string; }[][] = [
  [
    { svg: instagramSvg, url: 'https://www.instagram.com/alexkatzmusic/' },
    { svg: facebookSvg, url: 'https://www.facebook.com/alexkatzmusic/' },
  ],
  [
    { svg: appleSvg, url: 'https://music.apple.com/us/album/rolling-blue/1488722852?app=music&ign-mpt=uo%3D4' },
    { svg: spotifySvg, url: 'https://open.spotify.com/album/52sdpOga5e4LlUNETsEfPQ' },
    { svg: googleSvg, url: 'https://play.google.com/store/music/album/Alex_Katz_Rolling_Blue?id=Be4ha7htcuphtbjggxynms4rigi' },
  ],
  [
    { svg: youtubeSvg, url: 'https://www.youtube.com/watch?v=2-MtbpW7AH4&list=OLAK5uy_mX6Ur0nSgNuhv2ZA61VpAI77J5nsdkZyE' },
    { svg: bandcampSvg, url: 'https://alexkatz.bandcamp.com/album/rolling-blue' },
  ],
];

export const SocialMediaLinks: React.FC = props => (
  <div
    css={css`
      width: 100%;
    `}
    {...props}
  >
    {
      SOCIAL_MEDIA_LINKS.map((svgLinks, svgsIndex) => (
        <div
          key={svgsIndex}
          css={css`
          display: flex;
          justify-content: center;
          ${svgsIndex !== svgLinks.length && css`
            margin-bottom: ${Constants.THIRTY_TWO}px;
          `}
        `}
        >
          {
            svgLinks.map(({ svg, url }, svgIndex) => (
              <SocialMediaLink
                key={svgIndex}
                onClick={() => window?.open(url, '_blank')}
                svg={svg}
                css={css`
                  height: 30px;
                  opacity: 0.4;

                  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
                    height: 30px;
                  }
    
                  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.TABLET)} {
                    height: 30px;
                  }

                  ${screenWidthAt(Constants.MEDIA_BREAKPOINTS.MOBILE)} {
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
    
                  ${svgIndex !== svgLinks.length - 1 && css`
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
