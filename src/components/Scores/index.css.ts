import { globalStyle, style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";
import { baseColorVars, domainColorThemeVars } from "@styles/themes.css";

export const scores = style([
  /*utils({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxInlineSize: "90rem",
    marginInline: "auto",
    paddingInline: "xs-2xl",
    columnGap: "lg",
    rowGap: "xl",
  }),
  {
    paddingBlock: "5rem",
  }*/
]);

export const score = style([
  /*utils({
    display: "flex",
    flexDirection: "column",
    fontFamily: "secondary",
    maxInlineSize: "max-content",
  })*/
]);

export const label = style([
  /*utils({
    color: "base-1",
    fontSize: "md",
    fontWeight: 600,
    alignSelf: "center",
  }),
  {
    order: 2,
    marginBlockStart: "0.25em"
  }*/
]);

export const value = style([
  /*utils({
    display: "inline-flex",
    alignItems: "center",
    fontSize: "3xl",
    fontWeight: 500,
    lineHeight: "none",
    alignSelf: "center",
  }),
  {
    order: 1
  }*/
]);

export const suffix = style([
  /*utils({
    fontSize: "xl",
    color: "domain-1",
  })*/
]);

export const description = style([
  /*utils({
    color: "base-2",
    fontFamily: "primary",
    fontSize: "sm",
    fontWeight: 500,
    maxInlineSize: "30ch",
    textAlign: "center",
    marginBlockStart: "2xs",
  }),
  {
    order: 3,
  }*/
]);

globalStyle(`${description} strong`, {
  /*color: domainColorThemeVars["domain-1"],
  fontWeight: 600*/
});