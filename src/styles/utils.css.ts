import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { baseColorVars, domainColorThemeVars, fontVars, spaceVars } from "./themes.css";

const colors = {
  ...domainColorThemeVars,
  ...baseColorVars,
  "inherit": "inherit",
  "transparent": "transparent"
}

const borderProperties = defineProperties({
  properties: {
    border: ["none", "solid"],
    borderRadius: {
      "sm": spaceVars["3xs"],
      "md": spaceVars["2xs"],
      "lg": spaceVars["sm"],
    }
  }
});

const colorProperties = defineProperties({
  properties: {
    backgroundColor: colors,
    borderColor: colors,
    color: colors,
  }
});

const fontProperties = defineProperties({
  properties: {
    fontFamily: {
      "primary": {
        fontFamily: fontVars.fontFamily.primary,
        letterSpacing: "-0.025em"
      },
      "secondary": fontVars.fontFamily.secondary,
    },
    fontSize: fontVars.fontSize,
    fontStyle: ["italic", "normal"],
    fontWeight: [300, 400, 500, 600, 700, 800, 900],
    lineHeight: fontVars.lineHeights,
    letterSpacing: ["0", "-0.025em"]
  }
});

const layoutProperties = defineProperties({
  properties: {
    boxSizing: ["border-box", "content-box"],
    display: [
      "block", "flex", "inline", "inline-block",
      "inline-flex", "inline-grid", "grid",
      "none", "contents"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignContent: ["center", "flex-start", "flex-end", "space-between", "space-around", "space-evenly", "stretch"],
    alignItems: ["center", "flex-start", "flex-end", "baseline", "stretch"],
    alignSelf: ["auto", "center", "flex-start", "flex-end", "baseline", "stretch"],
    isolation: ["isolate"],
    justifyContent: ["center", "flex-start", "flex-end", "space-between", "space-around", "space-evenly", "stretch"],
    justifyItems: ["center", "flex-start", "flex-end", "baseline", "stretch"],
    justifySelf: ["auto", "center", "flex-start", "flex-end", "baseline", "stretch"],
  },
  shorthands: {
    placeItems: ["alignItems", "justifyItems"],
    placeContent: ["alignContent", "justifyContent"],
    placeSelf: ["alignSelf", "justifySelf"],
  }
});

const objectProperties = defineProperties({
  properties: {
    objectFit: ["contain", "cover", "fill", "none", "scale-down"]
  }
});

const positionProperties = defineProperties({
  properties: {
    position: ["absolute", "fixed", "relative", "static", "sticky"],
  }
});

const sizeProperties = defineProperties({
  properties: {
    inlineSize: ["auto", "100%", "max-content", "fit-content"],
    blockSize: ["auto", "100%"],
    maxInlineSize: [
      "20ch", "30ch", "36ch", "48ch", "64ch", "72ch", "80ch",
      "max-content", "fit-content",
      "65rem", "72.5rem", "90rem", "20rem", "27rem", "80rem", "90rem"
    ],
  }
});

const spacingProperties = defineProperties({
  properties: {
    columnGap: spaceVars,
    rowGap: spaceVars,
    marginInlineStart: ["auto"],
    marginInlineEnd: ["auto"],
    marginBlockStart: spaceVars,
    marginBlockEnd: spaceVars,
    paddingInlineStart: spaceVars,
    paddingInlineEnd: spaceVars,
    paddingBlockEnd: spaceVars,
    paddingBlockStart: spaceVars,
  },
  shorthands: {
    gap: ["columnGap", "rowGap"],
    marginInline: ["marginInlineStart", "marginInlineEnd"],
    marginBlock: ["marginBlockStart", "marginBlockEnd"],
    paddingInline: ["paddingInlineStart", "paddingInlineEnd"],
    paddingBlock: ["paddingBlockStart", "paddingBlockEnd"],
  }
});

const textProperties = defineProperties({
  properties: {
    textAlign: ["center", "left", "right"],
    textDecoration: ["underline", "none"],
    textTransform: ["lowercase", "uppercase"],
    writingMode: ["horizontal-tb", "vertical-rl", "vertical-lr"]
  }
});

const visibilityProperties = defineProperties({
  properties: {
    opacity: {
      hidden: 0,
      ghost: 0.15,
      dimmed: 0.8,
      visible: 1
    },
    overflow: ["auto", "hidden", "visible", "scroll"],
    visibility: ["visible", "hidden"]
  }
});

export const utils = createSprinkles(
  borderProperties,
  colorProperties,
  fontProperties,
  layoutProperties,
  objectProperties,
  positionProperties,
  sizeProperties,
  spacingProperties,
  textProperties,
  visibilityProperties
);

export const visuallyHidden = style({
  border: 0,
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  margin: '-1px',
  padding: 0,
  width: '1px'
});