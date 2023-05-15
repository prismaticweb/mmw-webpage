import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

const clipSize = "100px";

export const logos = style([
  /*utils({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "ci-1",
  }),
  {
    gap: "3em",
    padding: "100px 1em",
    color: "white",
    mask: `url("/clip.svg") center bottom/1440px 100% no-repeat`,
    WebkitMask: `
      url("/clip-top.svg") center top/100% calc(100% - ${clipSize}) no-repeat,
      url("/rect.svg") center center/100% calc(100% - (200px - 1px)) no-repeat,
      url("/clip.svg") center bottom/100% ${clipSize} no-repeat`
  }*/
]);

export const logo = style([
  /*utils({
  })*/
]);

export const image = style([
  /*utils({
    display: "block",
    objectFit: "contain",
  })*/
]);