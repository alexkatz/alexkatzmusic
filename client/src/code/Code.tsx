import React from 'react';
import { css } from '@emotion/core';
import { Color } from '../shared/colors';
import githubSvg from '../assets/vector/github-logo.svg';
import { SocialMediaLink } from '../socialMediaLinks/SocialMediaLink';
import { Style } from '../shared/styles';
import { Constant } from '../shared/constants';

export const Code: React.FC = () => (
  <div
    css={css`
      display: grid;
      ${Style.RESPONSIVE_CENTER_COLUMN};
      color: ${Color.WHITE};
      text-shadow: ${Constant.TEXT_SHADOW};
    `}
  >
    <div
      css={css`
        grid-column-start: content-column-start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding-top: ${Constant.THIRTY_TWO}px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        `}
      >
        <SocialMediaLink
          svg={githubSvg}
          onClick={() => window?.open('https://github.com/alexkatz', '__blank')}
          css={css`height: 30px;`}
        />
      </div>
      <div 
        css={css`
          margin-top: ${Constant.SIXTY_FOUR}px;
          padding-left: ${Constant.SIXTEEN}px;
          padding-right: ${Constant.SIXTEEN}px;
        `}
      >
        <a
          href='https://github.com/alexkatz'
          target='__blank'
          css={css`
            font-family: 'Muli-Regular';
            display: block;
            font-size: ${Constant.TWENTY_FOUR}px;
            :visited { 
              color: ${Color.WHITE};
            }
          `}
        >
          https://github.com/alexkatz
        </a>
        <p>Personal projects on Github, featuring 'react-tiny-popover,' a minimal React popover component growing in popularity.</p>
      </div>
      <div 
        css={css`
          margin-top: ${Constant.SIXTY_FOUR}px;
          padding-left: ${Constant.SIXTEEN}px;
          padding-right: ${Constant.SIXTEEN}px;
        `}
      >
        <a
          href='http://www.musicalmind.io/'
          target='__blank'
          css={css`
            font-family: 'Muli-Regular';
            display: block;
            font-size: ${Constant.TWENTY_FOUR}px;
            :visited { 
              color: ${Color.WHITE};
            }
          `}
        >
          http://www.musicalmind.io/
        </a>
        <p>A site I'm hosting to house my collection of musical apps. Currently present is 'audio stretcher', a browser-based audio analysis tool with YouTube integration.</p>
      </div>
    </div>
  </div >
);