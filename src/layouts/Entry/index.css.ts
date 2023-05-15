import { style } from "@vanilla-extract/css";
import { utils } from "../../styles/utils.css";

export const body = style([
  utils({
    color: "base-1",
    backgroundColor: "base-6",
    fontFamily: "primary",
    fontSize: "base",
    lineHeight: "base",
  }),
]);

export const headerBody = style([
  /*utils({
    paddingBlock: "md",
    paddingInline: "xs-2xl",
    maxInlineSize: "90rem",
    marginInline: "auto",
  })*/
]);

export const header = style([
  /*utils({
  })*/
]);

export const logo = style([]);