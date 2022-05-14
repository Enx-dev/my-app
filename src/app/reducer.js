import { LIGHTMODE, DARKMODE } from "./Constants";
export const reducer = (theme = "darkmode", action) => {
  switch (action.type) {
    case LIGHTMODE:
      return (theme = " lightmode");
    case DARKMODE:
      return (theme = "darkmode");
    default:
      return theme;
  }
};
