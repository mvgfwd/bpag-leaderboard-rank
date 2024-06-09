import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const tcSlice = createSlice({
  name: "termcond",
  initialState,
  reducers: {
    showTC: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { showTC } = tcSlice.actions;

export default tcSlice.reducer;
