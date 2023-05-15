import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

export const members = style([
  utils({
    boxSizing: "content-box",
    display: "flex",
    flexWrap: "wrap",
    marginInline: "auto",
    justifyContent: "center",
    columnGap: "xl",
    rowGap: "2xl",
    paddingInline: "xs-2xl",
    maxInlineSize: "80rem",
  }),
  {
    paddingBlock: "5rem"
  }
]);

export const member = style([
  utils({
    maxInlineSize: "20rem",
  })
]);

export const name = style([
  utils({
    color: "base-1",
    fontFamily: "secondary",
    fontSize: "md",
    fontWeight: 600,
    marginBlockStart: "sm"
  })
]);

export const roleWrapper = style([
  utils({
    fontSize: "xs",
    marginBlockStart: "3xs"
  })
]);

export const role = style([
  utils({
    color: "ci-4",
    fontSize: "xs",
    fontWeight: 500
  })
]);

export const description = style([
  utils({
    color: "base-2",
    fontSize: "sm",
    lineHeight: "relaxed",
    marginBlockStart: "xs"
  }),
]);

export const imageContainer = style([
  utils({
    overflow: "hidden",
  }),
  {
    borderRadius: "0.5rem",
    filter: "drop-shadow(0px 4px 5px hsla(229deg, 71%, 9%, 0.25))",
    transform: "translateZ(0)"
  }
]);

export const image = style([
  utils({
    display: "block",
    objectFit: "cover",
    inlineSize: "100%",
    blockSize: "100%",
  }),
  {
    objectPosition: "center top"
  }
]);