// "use client";
import React from "react";
import "../app/globals.css";
import { RootState, useAppSelector } from "@/app/_store/store";
import ReduxProvider from "@/app/_store/reduxProvider";
import Layout from "@/app/components/_Layout/layoutoutlet";

function Terms({ asd }: any) {
  // const kompedium = useAppSelector((state: RootState) => state.gamesRank);
  // const res = kompedium[0].players.map((e) => (
  //   <div key={e.playerName}>asd</div>
  // ));
  return <div>compendium = {asd} </div>;
}

export default Terms;
