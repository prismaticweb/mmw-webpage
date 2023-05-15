import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

export const figure = style([
  utils({
    maxInlineSize: "90rem",
    marginInline: "auto",
    paddingInline: "xs-2xl",
  }),
  {
    marginBlock: "2em",
    paddingBlock: "5rem"
  }
]);

export const imageContainer = style([
  utils({
    overflow: "hidden",
    borderRadius: "lg"
  }),
  {
    blockSize: "max(500px, 40vh)",
    filter: "drop-shadow(0px 4px 5px hsla(229deg, 71%, 9%, 0.25))",
    transform: "translateZ(0)"
  }
]);

export const image = style([
  utils({
    display: "block",
    inlineSize: "100%",
    blockSize: "100%",
    objectFit: "cover",
  }),
  {
    objectPosition: "top center",
  }
]);

export const caption = style([
  utils({
    color: "base-2",
    fontSize: "sm",
    maxInlineSize: "80ch",
  }),
  {
    marginBlockStart: "1em",
    paddingInline: "1em",
  }
]);