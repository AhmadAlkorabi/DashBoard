import { getCurrentBreakpoint } from "@/utils/theme-functions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
const fullConfig = resolveConfig(tailwindConfig);

export interface UIState {
  openSidebar: boolean;
  currentScreen: keyof typeof fullConfig.theme.screens;
}

const initialState: UIState = {
  openSidebar: false,
  currentScreen: "sm",
};

const slice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    updateUIState: (
      state,
      action: PayloadAction<{ key: keyof UIState; payload: any }>
    ) => {
      const { key, payload } = action.payload;
      (state as any)[key] = payload;
    },
    updateCurrentScreen: (state) => {
      state.currentScreen = getCurrentBreakpoint();
    },
  },
});

export default slice.reducer;

export const { updateUIState, updateCurrentScreen } = slice.actions;
