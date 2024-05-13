import React, { useEffect } from "react";
import Image from "next/image";
import imagetest from "../../../_assets/_image/logo.png";
import "../../../globals.css";
import "./header.css";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { PlayerStats } from "@/app/_type/player";
import { db } from "@/firebase/firebase";
// import { useDispatch, useSelector } from "react-redux";
import { coupSave, loveletterSave, sixnimmtSave } from "../../../_store/slicer";
import {
  useAppSelector,
  useAppDispatch,
  RootState,
} from "../../../_store/store";

import { isOpenHmb } from "@/app/_store/headerhamburger";
import { gameIndex } from "@/app/_store/arridx";
import { isLoading } from "@/app/_store/isloading";
import { selectedGame } from "@/app/_store/pickedgame";

function Header() {
  const dispatch: any = useAppDispatch();
  const coupData = useAppSelector((state: RootState) => state.gamesRank[0]);
  const llData = useAppSelector((state: RootState) => state.gamesRank[1]);
  const sixnimmtData = useAppSelector((state: RootState) => state.gamesRank[2]);
  const hamburgerMenu = useAppSelector((state: RootState) => state.hamburger);
  const gameDb = collection(db, "games");

  let dropdown;
  const arrOfGames: string[] = [
    "Coup",
    "Love Letter",
    "Six Nimmt",
    "Ticket To Ride",
    "Sushi Go",
  ];

  async function pickedGame(game: string) {
    dispatch(isOpenHmb(false));
    dispatch(isLoading(true));
    switch (game) {
      case "Coup":
        const coupDoc = doc(gameDb, "coup");
        const coupRankingCollection = collection(coupDoc, "playerRanking");
        dispatch(gameIndex(0));
        if (coupData.players.length > 0) {
          console.log(coupData);
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const coupQuerySnapshot = await getDocs(coupRankingCollection);
        let coupArrayPlayer: PlayerStats[] = [];
        coupQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            coupArrayPlayer.push(data);
          }
        });
        coupArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(coupSave(coupArrayPlayer));
        break;

      case "Love Letter":
        const llDoc = doc(gameDb, "loveletter");
        const llRankingCollection = collection(llDoc, "playerRanking");
        dispatch(gameIndex(1));
        if (llData.players.length > 0) {
          console.log(llData);
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const llQuerySnapshot = await getDocs(llRankingCollection);
        let llArrayPlayer: PlayerStats[] = [];
        llQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            llArrayPlayer.push(data);
          }
        });
        llArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(loveletterSave(llArrayPlayer));
        break;

      case "Six Nimmt":
        const sixnimmtDoc = doc(gameDb, "sixnimmt");
        const sixnimmtRankingCollection = collection(
          sixnimmtDoc,
          "playerRanking"
        );
        dispatch(gameIndex(2));
        if (sixnimmtData.players.length > 0) {
          console.log(sixnimmtData);
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const sixnimmtQuerySnapshot = await getDocs(sixnimmtRankingCollection);
        let sixNimmtArrayPlayer: PlayerStats[] = [];
        sixnimmtQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            sixNimmtArrayPlayer.push(data);
          }
        });
        sixNimmtArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(sixnimmtSave(sixNimmtArrayPlayer));
        break;
    }
    dispatch(isLoading(false));
    dispatch(selectedGame(game));
  }

  function onClickOpenHmbr(val?: boolean) {
    if (val === false && !hamburgerMenu) {
      return;
    }
    dispatch(isOpenHmb(!hamburgerMenu));
  }

  if (hamburgerMenu) {
    dropdown = (
      <ul
        className={`toggleDropdown example whitespace-nowrap text-sm absolute top-6 rounded-[4px] right-0 flex flex-col bg-bp-pri-500 items-end overflow-auto h-[142px] ${
          !hamburgerMenu ? "menuclose" : ""
        }`}
      >
        {arrOfGames.map((e) => (
          <li
            className="z-10 pl-5 text-[17px] hover:bg-bp-pri-400 font-ibm text-bp-sec-800 px-2 py-[5px] w-[100%] text-right border border-b-bp-pri-700 border-t-0 border-x-0 cursor-pointer"
            key={e}
            onClick={() => {
              pickedGame(e);
            }}
          >
            {e}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex px-0 sm:px-6 justify-between h-20 bg-bp-sec-300 items-center opacity-95 sm:h-16 sm:rounded-b-lg">
      <Image
        // onClick={testMethod}
        src={imagetest}
        alt="The Logo"
        className="h-[80px] w-[80px] ml-24 sm:ml-0 sm:mr-5 sm:h-[60px] sm:w-[60px] "
        priority
      />
      <span className="text-bp-sec-900 mr-8 text-[32px] font-eczar">
        LEADERBOARD
      </span>
      <div className="mr-24 relative flex flex-row">
        <span
          onClick={() => onClickOpenHmbr()}
          className="text-bp-sec-900 sm:font-semibold text-[33px] cursor-pointer rounded-full"
        >
          {" "}
          ≡{" "}
        </span>
        {dropdown}
      </div>
    </div>
  );
}

export default Header;
