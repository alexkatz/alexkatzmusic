import React from 'react';
import { css } from '@emotion/core';
import { SocialMediaLink } from './SocialMediaLink';
import appleMusicSvg from '../assets/vector/apple-music-logo.svg';
import spotifySvg from '../assets/vector/spotify-logo.svg';

export const SocialMediaLinks: React.FC = props => {
  const logos = [appleMusicSvg, spotifySvg];
  return (
    <div
      {...props}
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      `}
    >
      {logos.map((logo, index) => (
        <SocialMediaLink
          key={'logo' + index}
          css={css`height: 100%; width: 100px;`}
          svg={logo}
        />
      ))}
    </div>
  );
};
