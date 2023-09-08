import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    displayStyle: {
      display: "flex",
      width: "20%",
      marginLeft: "2rem",
      marginTop: "6rem",
    },
  },
  reducers: {
    setDisplayStyle: (state, action) => {
      state.displayStyle = action.payload;
    },
  },
});

export const { setDisplayStyle } = appStateSlice.actions;
export default appStateSlice.reducer;
