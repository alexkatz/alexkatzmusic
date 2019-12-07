import React, { useState, useCallback } from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { SocialMediaLinks } from '../socialMediaLinks/SocialMediaLinks';
import { HeaderItem, HeaderItemProps } from './HeaderItem';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

enum HeaderItemName {
  MUSIC = 'music',
  PRODUCTION = 'production',
  APPS = 'apps',
}

export const Header: React.FC = () => {
  const history = useHistory();
  const { headerItemValue } = useParams<{ headerItemValue: string }>();
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
          const isHighlighted = ((): boolean => {
            switch (value) {
              case HeaderItemName.MUSIC: return headerItemValue == null;
              default: return value === headerItemValue;
            }
          })()
          return (
            <HeaderItem
              key={key}
              text={value}
              isHighlighted={isHighlighted}
              onClick={() => {
                history.push(`/${value === HeaderItemName.MUSIC ? '' : value}`)
              }}
            />
          )
        })
      }
    </div>
  );
}