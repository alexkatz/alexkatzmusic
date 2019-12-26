import React from 'react';
import { css } from '@emotion/core';
import { AutoSizer } from 'react-virtualized';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { Constants } from '../shared/constants';
import { Color } from '../shared/colors';
import rollingBlueAlbumCover from '../assets/image/rolling_blue_album_art_1024.jpg';

interface AlbumCoverProps {
  maxSize?: number;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({ maxSize }) => {
  const history = useHistory();
  return (
    <AutoSizer disableHeight>
      {({ width }) => {
        const containerSize = Math.min(width, maxSize);
        const halfContainerSize = containerSize / 2;
        return (
          <div
            style={{
              width: containerSize,
              height: containerSize,
              top: 0,
              left: (width / 2) - halfContainerSize,
              position: 'relative',
            }}
          >
            <motion.img
              css={css`
                border: 2px solid ${Color.DARK_BLUE_BACKGROUND};
                object-fit: contain;
                height: 100%;
                box-shadow: ${Constants.TEXT_SHADOW};
                cursor: pointer;
                opacity: 1;
              `}
              onClick={() => history.push('/about')}
              src={rollingBlueAlbumCover}
              whileHover={{ scale: 1.005 }}
              transition={{ scale: { type: 'spring', damping: 2, mass: 0.1 } }}
            />
          </div>
        )
      }}
    </AutoSizer>
  );
};