import { LIGHTMODE, DARKMODE } from "./Constants";

export const setTheme = (mode) => async (dipatch) => {
  if (mode === "lightmode") {
    dipatch({ type: LIGHTMODE });
  } else {
    dipatch({ type: DARKMODE });
  }
};
