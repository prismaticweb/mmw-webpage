import { inter, poppins } from "./fonts.css";
import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const domainColorThemeVars = createThemeContract({
  "domain-1": null,
  "domain-2": null,
  "domain-3": null,
  "domain-4": null,
});

export const [baseColorTheme, baseColorVars] = createTheme({
  "base-6": "#FAFBFF",
  "base-5": "#F0F3FF",
  "base-4": "#B8BFE0",
  "base-3": "#5967A6",
  "base-2": "#1B234A",
  "base-1": "#070D29",
  "ci-4": "#FFF2F2",
  "ci-3": "#C66060",
  "ci-2": "#A81A1A",
  "ci-1": "#8B0000",
  "success-1": "hsl(138deg, 68%, 46%)",
  "success-2": "hsl(138deg, 56%, 70%)",
  "success-3": "hsl(138deg, 56%, 85%)",
  "warning-1": "hsl(21deg, 97%, 46%)",
  "warning-2": "hsl(21deg, 74%, 70%)",
  "warning-3": "hsl(21deg, 70%, 85%)",
  "fatal-1": "hsl(0deg, 83%, 50%)",
  "fatal-2": "hsl(0deg, 74%, 70%)",
  "fatal-3": "hsl(0deg, 66%, 85%)",
});

export const [fontTheme, fontVars] = createTheme({
  fontFamily: {
    "primary": inter,
    "secondary": {
      fontFamily: poppins,
      letterSpacing: "-0.02em"
    }
  },
  fontSize: {
    "xs": "clamp(0.83rem, calc(0.81rem + 0.12vw), 0.90rem)",
    "sm": "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
    "base": "clamp(1.00rem, calc(0.96rem + 0.22vw), 1.13rem)",
    "md": "clamp(1.20rem, calc(1.13rem + 0.36vw), 1.41rem)",
    "lg": "clamp(1.44rem, calc(1.33rem + 0.55vw), 1.76rem)",
    "xl": "clamp(1.73rem, calc(1.56rem + 0.82vw), 2.20rem)",
    "2xl": "clamp(2.07rem, calc(1.84rem + 1.17vw), 2.75rem)",
    "3xl": "clamp(2.49rem, calc(2.16rem + 1.64vw), 3.43rem)",
  },
  lineHeights: {
    "none": "1",
    "tight": "1.25",
    "snug": "1.375",
    "base": "1.5",
    "relaxed": "1.625",
    "loose": "2"
  }
});

export const [spaceTheme, spaceVars] = createTheme({
  "3xs": "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)",
  "2xs": "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)",
  "xs": "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)",
  "sm": "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  "md": "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)",
  "lg": "clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)",
  "xl": "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)",
  "2xl": "clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)",
  "3xl": "clamp(9.00rem, calc(8.65rem + 1.74vw), 10.00rem)",
  "4xl": "clamp(11.25rem, calc(10.82rem + 2.17vw), 12.50rem)",
  "3xs-md": "clamp(0.31rem, calc(-0.23rem + 2.72vw), 1.88rem)",
  "xs-2xl": "clamp(0.88rem, calc(-1.43rem + 11.52vw), 7.50rem)"
});