import React from 'react';
import { css } from '@emotion/core';
import { SocialMediaLink } from './SocialMediaLink';
import spotifySvg from '../assets/svg/spotify.svg';

export const SocialMediaLinks: React.FC = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    `}
  >
    <SocialMediaLink svg={spotifySvg} />
    <SocialMediaLink svg={spotifySvg} />
  </div>
);
