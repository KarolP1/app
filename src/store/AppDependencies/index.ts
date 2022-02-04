import { colorTheme } from "./../../theme/colorTheme";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkThemeEnabled: false,
  isUserSignedIn: false,
  appName: "YourAppName",
  isMenuOpen: false,
  theme: colorTheme,
};

export const appDependenciesSlice = createSlice({
  name: "AppDependencies",
  initialState,
  reducers: {
    toogleDarkTheme: (state) =>
      (state = { ...state, isDarkThemeEnabled: !state.isDarkThemeEnabled }),
    setIsUserSignedIn: (state) =>
      (state = { ...state, isUserSignedIn: !state.isUserSignedIn }),
    setIsMenuOpen: (state) =>
      (state = { ...state, isMenuOpen: !state.isMenuOpen }),
  },
});

export const { toogleDarkTheme, setIsUserSignedIn, setIsMenuOpen } =
  appDependenciesSlice.actions;
