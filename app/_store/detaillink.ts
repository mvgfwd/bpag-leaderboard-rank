import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const detailGameLinkSlice = createSlice({
  name: "detailLink",
  initialState,
  reducers: {
    linkDetail: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { linkDetail } = detailGameLinkSlice.actions;

export default detailGameLinkSlice.reducer;
