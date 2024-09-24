import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

type ScreenType = keyof typeof fullConfig.theme.screens;

const getBreakpointValue = (value: ScreenType): number =>
  +fullConfig.theme.screens[value].slice(
    0,
    fullConfig.theme.screens[value].indexOf("px")
  );

export const getCurrentBreakpoint = (): ScreenType => {
  let currentBreakpoint: ScreenType = "xs";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint as ScreenType);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint as ScreenType;
    }
  }
  return currentBreakpoint;
};
