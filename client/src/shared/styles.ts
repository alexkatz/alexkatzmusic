import { css } from "@emotion/core";
import { Constant } from "./constants";
import { screenWidthAt } from "./utils";

export const Style = {
  RESPONSIVE_CENTER_COLUMN: css`
    grid-template-columns: auto [content-column-start] 1200px [content-column-end] auto;         
    ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.SMALLER_DESKTOP)} {
          grid-template-columns: auto [content-column-start] 85% [content-column-end] auto;  
        } 
    ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.TABLET)} {
      grid-template-columns: auto [content-column-start] ${Constant.MEDIA_BREAKPOINTS.MOBILE} [content-column-end] auto;  
    }
    ${screenWidthAt(Constant.MEDIA_BREAKPOINTS.MOBILE)} {
      grid-template-columns: [content-column-start] auto [content-column-end];
    }
  `,
};