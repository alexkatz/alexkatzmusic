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
      display: flex;
      align-items: center;
    `}
    transition={{
      scale: { type: 'spring', damping: 2, mass: 0.1 },
      opacity: { type: 'tween', duration: 0.35 }
    }}
    whileHover={{
      opacity: 1,
    }}
    whileTap={{
      scale: 0.98,
    }}
  >
    <img
      css={css`
      object-fit: contain;
      height: 100%;
    `}
      src={svg}
    />
  </motion.div>
);
