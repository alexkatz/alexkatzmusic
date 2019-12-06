import React from 'react';

interface SocialMediaLinkProps { 
  svg: string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ svg }) => (
  <img
    src={svg}
  />
);
