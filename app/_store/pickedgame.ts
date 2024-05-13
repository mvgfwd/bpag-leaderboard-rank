import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const pickedGameSlice = createSlice({
  name: "pickedGame",
  initialState,
  reducers: {
    selectedGame: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectedGame } = pickedGameSlice.actions;

export default pickedGameSlice.reducer;
