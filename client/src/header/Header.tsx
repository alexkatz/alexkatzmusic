import React, { useState, useCallback } from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { HeaderItem, HeaderItemProps } from './HeaderItem';

enum HeaderItemName {
  MUSIC = 'music',
  PRODUCTION = 'production',
  APPS = 'apps',
}

export const Header: React.FC = () => {
  const [selectedHeaderItem, setSelectedHeaderItem] = useState<HeaderItemName>(HeaderItemName.MUSIC);
  console.log(selectedHeaderItem);
  return (
    <div
      css={css`
        grid-row-start: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      `}
    >
      <div
        css={css`
          color: white;
          font-size: 70px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: auto;
          margin-left: ${Constants.PADDING}px;
        `}
      >
        alex katz
      </div>
      {
        Object.keys(HeaderItemName).map(key => {
          const value: HeaderItemName = HeaderItemName[key]
          return (
            <HeaderItem
              key={key}
              text={value}
              isHighlighted={value === selectedHeaderItem}
              onClick={() => {
                setSelectedHeaderItem(value);
                
              }}
            />
          )
        })
      }
    </div>
  );
}