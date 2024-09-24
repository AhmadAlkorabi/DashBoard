import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { store } from "./store";
import ui from "./slice/ui";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["lang"],
};

const uiPersistConfig = {
  key: "ui",
  storage,
  keyPrefix: "redux-",
  whitelist: ["openSidebar"],
};


const rootReducer = combineReducers({
  ui: persistReducer(uiPersistConfig, ui),
});

export { rootPersistConfig, rootReducer };

export type IRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
