import { globalStyle, style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";
import { domainColorThemeVars } from "@styles/themes.css";

const clipSize = "200px";

export const cta = style([
  utils({
    backgroundColor: "base-1",
    paddingInline: "xs-2xl",
  }),
  {
    paddingBlock: "200px",
    color: "white",
    gap: "1em",
    mask: `url("/clip.svg") center bottom/1440px 100% no-repeat`,
    WebkitMask: `
      url("/clip-top.svg") center top/100% calc(100% - ${clipSize}) no-repeat,
      url("/rect.svg") center center/100% calc(100% - (400px - 1px)) no-repeat,
      url("/clip.svg") center bottom/100% ${clipSize} no-repeat`
  }
]);

export const contentWrapper = style([
  utils({
    maxInlineSize: "80rem",
    marginInline: "auto",
  })
]);

export const content = style([
  {},
  utils({
    fontFamily: "secondary",
    fontSize: "xl",
    fontWeight: 500,
    maxInlineSize: "36ch",
  })
]);

globalStyle(`${content} em`, {
  backgroundImage: `linear-gradient(transparent 0% 50%, ${domainColorThemeVars["domain-1"]} 50% 90%, transparent 90% 100%)`,
  fontStyle: "normal",
  paddingInline: "0.25em"
});

export const linkWrapper = style([
  utils({
    marginBlockStart: "md"
  })
]);