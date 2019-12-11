import React from 'react';
import { css } from '@emotion/core';
import { SocialMediaLink } from './SocialMediaLink';
import appleMusicLogo from '../assets/vector/apple-music-logo.svg';
import spotifyLogo from '../assets/vector/spotify-logo.svg';
import instagramLogo from '../assets/vector/instagram-logo.svg';
import facebookLogo from '../assets/vector/facebook-logo.svg';
import bandcampLogo from '../assets/vector/bandcamp-logo.svg';
import youtubeLogo from '../assets/vector/youtube-logo.svg';
import googlePlayLogo from '../assets/vector/google-play-logo.svg';
import amazonLogo from '../assets/vector/amazon-logo.svg';
import { Constants } from '../shared/constants';

export const SocialMediaLinks: React.FC = props => {
  const rowOneLogos = [spotifyLogo, appleMusicLogo, googlePlayLogo, amazonLogo, bandcampLogo];
  const rowTwoLogos = [youtubeLogo, facebookLogo, instagramLogo];
  return (
    <div
      {...props}
      css={css`
        display: grid;
        grid-template-columns: auto 700px auto;
      `}
    >
      <div
        css={css`
          grid-column: 2;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        {
          [...rowOneLogos, ...rowTwoLogos].map((logo, index) => (
            <SocialMediaLink
              key={'logo' + index}
              css={css`
                height: 50%; 
                width: 100px;
                margin-right: 20px;
                opacity: 0.4;
              `}
              svg={logo}
            />
          ))
        }
      </div>
    </div>
  );
};
