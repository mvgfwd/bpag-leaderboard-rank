import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    isOpenHmb: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { isOpenHmb } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
