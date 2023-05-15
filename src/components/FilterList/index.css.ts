import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { baseColorVars } from "@styles/themes.css";
import { utils } from "@styles/utils.css";

export const container = style([
  utils({
    boxSizing: "content-box",
    marginInline: "auto",
    paddingInline: "xs-2xl",
    maxInlineSize: "72.5rem",
    paddingBlock: "2xl",
  }),
]);

export const filterSelection = style([
  utils({
    display: "flex",
    flexWrap: "wrap",
    gap: "xs",
    marginBlockEnd: "lg",
    paddingBlockEnd: "lg",
  }),
  {
    listStyle: "none",
    borderBlockEnd: `1px solid ${baseColorVars["ci-4"]}`,
  }
]);

export const filterBase = style([
  utils({
    display: "block",
    border: "none",
    borderRadius: "lg",
    fontSize: "sm",
    fontFamily: "secondary",
    lineHeight: "none",
    paddingBlock: "2xs",
    paddingInline: "sm",
  }),
  {
    "@media": {
      "(hover: hover)": {
        transition: "transform 0.2s ease-in-out",
        ":hover": {
          transform: "translateY(-5%)",
        }
      }
    }
  }
]);

export const filter = recipe({
  base: filterBase,
  variants: {
    selected: {
      true: [
        utils({
          color: "ci-1",
          backgroundColor: "base-2",
        })
      ],
      false: [
        utils({
          color: "base-1",
          backgroundColor: "ci-2",
        })
      ]
    }
  },
  defaultVariants: {
    selected: false
  }
});

export const listWrapper = style([
  utils({
    display: "grid",
    columnGap: "md",
    rowGap: "2xs",
  }),
  {
    gridAutoRows: "min-content",
    minBlockSize: "25vh",
    "@media": {
      "screen and (min-width: 55em)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      }
    }
  }
]);

export const list = style([
  utils({
    display: "flex",
    flexDirection: "column",
    fontFamily: "secondary",
    gap: "2xs",
    paddingInlineStart: "sm"
  }),
  {
    listStyle: "outside",
  }
]);