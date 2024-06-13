import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlayerRank, PlayerStats } from "../_type/player";

const initialState: PlayerRank[] = [
  {
    gameName: "coup",
    players: [],
    gameLinkRef: "",
  },
  {
    gameName: "loveletter",
    players: [],
    gameLinkRef: "",
  },
  {
    gameName: "sixnimmt",
    players: [],
    gameLinkRef: "",
  },
  {
    gameName: "ttr",
    players: [],
    gameLinkRef: "",
  },
  {
    gameName: "sushigo",
    players: [],
    gameLinkRef: "",
  },
  {
    gameName: "saboteur",
    players: [],
    gameLinkRef: "",
  },
];

export const gamesSlice = createSlice({
  name: "gamesRank",
  initialState,
  reducers: {
    coupSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "coup");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
    loveletterSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "loveletter");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
    sixnimmtSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "sixnimmt");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
    ttrSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "ttr");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
    sushigoSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "sushigo");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
    saboteurSave: (state, action: PayloadAction<PlayerRank>) => {
      const stateIdx = state.findIndex((e) => e.gameName === "saboteur");
      action.payload.players.map((e) => {
        state[stateIdx].players.push(e);
      });
      state[stateIdx].gameLinkRef = action.payload.gameLinkRef;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  coupSave,
  loveletterSave,
  sixnimmtSave,
  ttrSave,
  sushigoSave,
  saboteurSave,
} = gamesSlice.actions;

export default gamesSlice.reducer;
