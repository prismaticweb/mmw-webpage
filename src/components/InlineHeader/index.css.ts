import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";
import { fontVars } from "@styles/themes.css";

const headerBase = style([
  /*utils({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingInline: "xs-2xl",
    gap: "xs",
    paddingBlock: "md",
  }),*/
]);

export const header = styleVariants({
  /*"dark": [headerBase, { color: "ci-1" }],
  "light": [headerBase, { color: "white" }],*/
});

export const title = style([
  /*utils({
    fontFamily: "secondary",
    fontWeight: 500,
    lineHeight: "tight",
    maxInlineSize: "30ch",
    textAlign: "center",
    marginInline: "auto",
  }),
  {
    "selectors": {
      "h2&": {
        fontSize: fontVars.fontSize["2xl"],
      },
      "h3&": {
        fontSize: fontVars.fontSize["xl"],
      }
    }
  }*/
]);

globalStyle(`${title} em`, {
  /*fontStyle: "normal",
  color: "#e82760"*/
});

export const tagline = style([
  /*utils({
    color: "base-2",
    maxInlineSize: "48ch",
    textAlign: "center",
  })*/
]);