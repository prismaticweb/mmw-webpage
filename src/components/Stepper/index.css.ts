import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

export const stepper = style([
  utils({
    boxSizing: "content-box",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "xl",
    justifyContent: "center",
    maxInlineSize: "80rem",
    paddingBlock: "xl",
    paddingInline: "xs-2xl",
    marginInline: "auto",
    rowGap: "2xl",
  })
]);

export const step = style([
  utils({
    maxInlineSize: "20rem",
  })
]);

export const title = style([
  utils({
    fontFamily: "secondary",
    color: "ci-6",
    fontSize: "lg",
    fontWeight: 500,
    lineHeight: "tight",
    maxInlineSize: "20ch",
  }),
]);

export const description = style([
  utils({
    color: "ci-5",
    maxInlineSize: "30ch",
    marginBlockStart: "xs",
  }),
]);

export const indicator = style([
  utils({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "md",
    marginBlockEnd: "md",
    backgroundColor: "domain-3",
  }),
  {
    inlineSize: "5rem",
    blockSize: "5rem",
  }
]);

export const stepIndicator = style([
  utils({
    color: "ci-4",
    fontSize: "sm",
    fontWeight: 500,
    marginBlockEnd: "3xs"
  })
]);

export const hgroup = style([]);

export const indicatorNumber = style([
  utils({
    color: "domain-1",
    fontFamily: "secondary",
    fontSize: "2xl",
    fontWeight: 600,
  })
]);