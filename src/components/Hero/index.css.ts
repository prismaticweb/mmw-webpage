import { globalStyle, style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";
import { baseColorVars, domainColorThemeVars, spaceVars } from "@styles/themes.css";

export const hero = style([
  utils({
    backgroundColor: "base-1",
    color: "base-6",
  }),
  /*{
    transform: "translateZ(0)",
    mask: `
    var(--rect) center top/100% calc(100% - (${spaceVars["2xl"]} - 1px)) no-repeat,
    var(--clip) center bottom/100% ${spaceVars["2xl"]} no-repeat`,
    WebkitMask: `
    var(--rect) center top/100% calc(100% - (${spaceVars["2xl"]} - 1px)) no-repeat,
    var(--clip) center bottom/100% ${spaceVars["2xl"]} no-repeat`
  }*/
]);

export const contentWrapper = style([
  /*utils({
    display: "grid",
    maxInlineSize: "90rem",
    paddingInlineStart: "xs-2xl",
    paddingInlineEnd: "xs-2xl",
    marginInline: "auto",
    gap: "md",
  }),
  {
    "@media": {
      "screen and (min-width: 60em)": {
        paddingInlineEnd: spaceVars["3xs-md"],
        gridTemplateColumns: "1fr 1fr",
      }
    }
  }*/
]);

export const body = style([
  /*utils({
    paddingBlockStart: "sm"
  }),
  {
    "@media": {
      "screen and (min-width: 60em)": {
        paddingBlockStart: spaceVars["lg"],
        paddingBlockEnd: spaceVars["2xl"],
      }
    }
  }*/
]);

export const title = style([
  {},
  utils({
    fontFamily: "secondary",
    fontSize: "xl",
    fontWeight: 500,
    lineHeight: "snug",
    maxInlineSize: "30ch"
  }),
]);

globalStyle(`${title} strong`, {
  backgroundImage: `linear-gradient(transparent 0% 50%, ${baseColorVars["ci-1"]} 50% 90%, transparent 90% 100%)`,
  fontWeight: 500,
  paddingInline: "0.25em"
});

export const tagline = style([
  utils({
    color: "base-5",
    maxInlineSize: "48ch",
    marginBlockStart: "xs",
  }),
  {}
]);

globalStyle(`${tagline} strong`, {
  backgroundImage: `linear-gradient(transparent 0% 50%, ${baseColorVars["ci-1"]} 50% 90%, transparent 90% 100%)`,
  fontWeight: 500,
  paddingInline: "0.2em"
});

export const ctas = style([
  /*utils({
    marginBlockStart: "lg"
  }),*/
]);

export const imageContainer = style([
  /*utils({
    justifySelf: "center",
    overflow: "hidden",
    paddingBlockStart: "md"
  }),
  {
    borderRadius: "0.5rem",
    maxInlineSize: "500px",
    "@media": {
      "screen and (min-width: 60em)": {
        flex: "1 1 400px",
        alignSelf: "flex-end",
        maxInlineSize: "600px",
        minInlineSize: "400px",
        maxBlockSize: "580px",
      }
    }
  }*/
]);

export const image = style([
  /*utils({
    display: "block",
    objectFit: "contain",
    inlineSize: "100%",
    blockSize: "100%",
  }),
  {
    objectPosition: "center bottom"
  }*/
]);