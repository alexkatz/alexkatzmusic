import React from 'react';
import { css } from '@emotion/core';
import { Constants } from '../shared/constants';
import { HeaderItem } from './HeaderItem';
import { useHistory, useParams } from 'react-router-dom';
import { HeaderItemName } from '../shared/HeaderItemName';
import { Color } from '../shared/colors';

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
        padding-right: ${Constants.MARGIN}px;
        text-shadow: ${Constants.TEXT_SHADOW};
      `}
    >
      <div
        css={css`
          color: ${Color.WHITE};
          font-size: 50px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: auto;
          margin-left: 30px;
        `}
      >
        {Constants.HEADER_TITLE}
      </div>
      {
        Object.keys(HeaderItemName).map((key, index, array) => {
          const value: HeaderItemName = HeaderItemName[key]
          const isHighlighted = ((): boolean => {
            switch (value) {
              case HeaderItemName.MUSIC: return headerItemValue == null;
              default: return value === headerItemValue;
            }
          })()
          return (
            <React.Fragment key={key}>
              <HeaderItem
                text={value}
                isHighlighted={isHighlighted}
                onClick={() => {
                  history.push(`/${value === HeaderItemName.MUSIC ? '' : value}`)
                }}
              />
              {index !== array.length - 1 && (
                <div
                  css={css`
                  width: 1px;
                  height: 25%;
                  opacity: 0.2;
                  background-color: ${Color.WHITE};
                `}
                />
              )}
            </React.Fragment>
          )
        })
      }
    </div>
  );
}