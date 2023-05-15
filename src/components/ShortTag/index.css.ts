import { style } from "@vanilla-extract/css";
import { utils } from "@styles/utils.css";

export const strapline = style([
  utils({
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "secondary",
    fontWeight: 500,
    gap: "2xs",
    marginBlockEnd: "xs",
  }),
]);