import { configureStore } from "@reduxjs/toolkit";
import appState from "./appStateSlice.js";

const store = configureStore({
  reducer: {
    appState,
  },
});
export default store;
