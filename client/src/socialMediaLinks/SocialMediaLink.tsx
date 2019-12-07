import React from 'react';
import { css } from '@emotion/core';

interface SocialMediaLinkProps {
  svg: string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ svg, ...props }) => (
  <div
    {...props}
  >
    <img
      css={css`
      object-fit: contain;
      width: 100%;
      height: 100%;
    `}
      src={svg}
    />
  </div>
);
