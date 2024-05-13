import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlayerRank, PlayerStats } from "../_type/player";

const initialState: PlayerRank[] = [
  {
    gameName: "coup",
    players: [],
  },
  {
    gameName: "loveletter",
    players: [],
  },
  {
    gameName: "sixnimmt",
    players: [],
  },
  {
    gameName: "ttr",
    players: [],
  },
  {
    gameName: "sushigo",
    players: [],
  },
];

export const gamesSlice = createSlice({
  name: "gamesRank",
  initialState,
  reducers: {
    coupSave: (state, action: PayloadAction<PlayerStats[]>) => {
      action.payload.map((e) => {
        const stateIdx = state.findIndex((e) => e.gameName === "coup");
        state[stateIdx].players.push(e);
      });
    },
    loveletterSave: (state, action: PayloadAction<PlayerStats[]>) => {
      action.payload.map((e) => {
        const stateIdx = state.findIndex((e) => e.gameName === "loveletter");
        state[stateIdx].players.push(e);
      });
    },
    sixnimmtSave: (state, action: PayloadAction<PlayerStats[]>) => {
      action.payload.map((e) => {
        const stateIdx = state.findIndex((e) => e.gameName === "sixnimmt");
        state[stateIdx].players.push(e);
      });
    },
    ttrSave: (state, action: PayloadAction<PlayerStats[]>) => {
      action.payload.map((e) => {
        const stateIdx = state.findIndex((e) => e.gameName === "ttr");
        state[stateIdx].players.push(e);
      });
    },
    sushigoSave: (state, action: PayloadAction<PlayerStats[]>) => {
      action.payload.map((e) => {
        const stateIdx = state.findIndex((e) => e.gameName === "sushigo");
        state[stateIdx].players.push(e);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { coupSave, loveletterSave, sixnimmtSave, ttrSave, sushigoSave } =
  gamesSlice.actions;

export default gamesSlice.reducer;
