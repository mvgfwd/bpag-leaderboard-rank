import { BoardGame } from "./boardgame";

export interface PlayerStats {
  playerName: string;
  point: number;
  playcycle: number;
}

export interface PlayerRank {
  gameName: string;
  players: PlayerStats[];
  gameLinkRef: string;
}
