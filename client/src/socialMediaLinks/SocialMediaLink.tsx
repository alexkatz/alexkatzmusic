import React from 'react';
import { css } from '@emotion/core';
import { motion, MotionProps } from 'framer-motion';

interface SocialMediaLinkProps {
  svg: string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps & MotionProps> = ({ svg, ...props }) => (
  <motion.div
    {...props}
    css={css`
      cursor: pointer;
    `}
  >
    <img
      css={css`
      object-fit: contain;
      width: 100%;
      height: 100%;
    `}
      src={svg}
    />
  </motion.div>
);
