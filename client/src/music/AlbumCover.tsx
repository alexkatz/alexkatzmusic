import React from 'react';
import { css } from '@emotion/core';
import { AutoSizer } from 'react-virtualized';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { Constant } from '../shared/constants';
import { Color } from '../shared/colors';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.jpg';

interface AlbumCoverProps {
  maxSize?: number;
  minSize?: number;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({ maxSize, minSize }) => {
  const history = useHistory();
  return (
    <AutoSizer>
      {({ width, height }) => {
        let containerSize = Math.min(width, height);
        containerSize = containerSize < maxSize ? (containerSize < minSize ? minSize : containerSize) : maxSize;
        const halfContainerSize = containerSize / 2;
        return (

          <motion.img
            style={{
              width: containerSize,
              height: containerSize,
              left: (width / 2) - halfContainerSize,
            }}
            css={css`
              position: relative;
              margin-bottom: ${Constant.THIRTY_TWO}px;
              box-shadow: ${Constant.TEXT_SHADOW};
              cursor: pointer;
              opacity: 1;
            `}
            onClick={() => history.push('/about')}
            src={rollingBlueAlbumCover}
            whileHover={{ scale: 1.005 }}
            transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
          />
        )
      }}
    </AutoSizer>
  );
};