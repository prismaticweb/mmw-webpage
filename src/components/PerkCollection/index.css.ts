import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

export const perkCollection = style([
  utils({
    boxSizing: "content-box",
    display: "flex",
    flexWrap: "wrap",
    marginInline: "auto",
    maxInlineSize: "90rem",
    columnGap: "md",
    rowGap: "xl",
    paddingInline: "xs-2xl",
  }),
  {
    paddingBlock: "3rem",
  },
]);

export const perk = style([
  utils({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  }),
  {
    flex: "1 1 auto"
  }
]);

export const description = style([
  utils({
    color: "base-2",
    fontSize: "sm",
    lineHeight: "snug",
    maxInlineSize: "30ch",
  }),
  {
    marginBlockStart: "1em"
  }
]);

export const labelWrapper = style([
  utils({
    maxInlineSize: "30ch"
  }),
  {
    marginBlockStart: "0.5em"
  }
]);

export const label = style([
  utils({
    color: "base-1",
    fontFamily: "secondary",
    fontWeight: 500,
  }),
]);

export const header = style([
  {
    display: "contents"
  }
]);