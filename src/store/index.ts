import { appDependenciesSlice } from "./AppDependencies/index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    AppDependecies: appDependenciesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectAppDependecies = (state: RootState) => state.AppDependecies;
