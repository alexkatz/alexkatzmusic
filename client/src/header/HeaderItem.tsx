import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { motion } from 'framer-motion';
import { Color } from '../shared/colors';

enum Variant {
  HIGHLIGHTED = 'highlighted',
  NOT_HIGHLIGHTED = 'notHighlighted',
}

export interface HeaderItemProps {
  text: string;
  isHighlighted?: boolean;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({ text, isHighlighted, onClick, ...props }) => {
  return (
    <motion.div
      {...props}
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 40px;

        @media (max-width: 420px) {
          width: 20px;
          font-size: 12px;
        }

        padding-left: ${Constants.MARGIN}px;
        padding-right: ${Constants.MARGIN}px;
        color: ${Color.WHITE};
        font-family: ${isHighlighted ? 'Muli-Regular' : 'Muli-ExtraLight'};
        cursor: pointer;
    `}
      variants={{
        [Variant.HIGHLIGHTED]: {
          opacity: 1,
          scale: 1.1,
        },
        [Variant.NOT_HIGHLIGHTED]: {
          opacity: 0.5,
          scale: 1.0,
        }
      }}
      animate={isHighlighted ? Variant.HIGHLIGHTED : Variant.NOT_HIGHLIGHTED}
      transition={{
        scale: { type: 'spring', damping: 2, mass: 0.1 },
        opacity: { type: 'tween', duration: 0.35 }
      }}
      whileHover={{
        opacity: 1,
      }}
    >
      {text}
    </motion.div>
  );
};