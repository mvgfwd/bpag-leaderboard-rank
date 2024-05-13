import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const gameIndexSlice = createSlice({
  name: "gameIndex",
  initialState,
  reducers: {
    gameIndex: (state, action: PayloadAction<number>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { gameIndex } = gameIndexSlice.actions;

export default gameIndexSlice.reducer;
