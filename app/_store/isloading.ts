import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
