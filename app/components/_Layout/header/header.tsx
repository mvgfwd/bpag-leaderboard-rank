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
import {
  coupSave,
  loveletterSave,
  sixnimmtSave,
  sushigoSave,
  ttrSave,
} from "../../../_store/slicer";
import {
  useAppSelector,
  useAppDispatch,
  RootState,
} from "../../../_store/store";

import { isOpenHmb } from "@/app/_store/headerhamburger";
import { gameIndex } from "@/app/_store/arridx";
import { isLoading } from "@/app/_store/isloading";
import { selectedGame } from "@/app/_store/pickedgame";
import { linkDetail } from "@/app/_store/detaillink";

function Header() {
  const dispatch = useAppDispatch();
  const coupData = useAppSelector((state: RootState) => state.gamesRank[0]);
  const llData = useAppSelector((state: RootState) => state.gamesRank[1]);
  const sixnimmtData = useAppSelector((state: RootState) => state.gamesRank[2]);
  const ttrData = useAppSelector((state: RootState) => state.gamesRank[3]);
  const sushiGoData = useAppSelector((state: RootState) => state.gamesRank[4]);
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
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const coupQuerySnapshot = await getDocs(coupRankingCollection);
        let coupArrayPlayer: PlayerStats[] = [];
        const coupSnap = await getDoc(coupDoc);
        const coupLink = coupSnap.data();
        coupQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            coupArrayPlayer.push(data);
          }
        });
        coupArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(
          coupSave({
            gameName: "coup",
            players: coupArrayPlayer,
            gameLinkRef: coupLink!.gameDetailLink,
          })
        );
        break;

      case "Love Letter":
        const llDoc = doc(gameDb, "loveletter");
        const llRankingCollection = collection(llDoc, "playerRanking");
        dispatch(gameIndex(1));
        if (llData.players.length > 0) {
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const llQuerySnapshot = await getDocs(llRankingCollection);
        let llArrayPlayer: PlayerStats[] = [];
        const llSnap = await getDoc(llDoc);
        const llLink = llSnap.data();
        llQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            llArrayPlayer.push(data);
          }
        });
        llArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(
          loveletterSave({
            gameName: "loveletter",
            players: llArrayPlayer,
            gameLinkRef: llLink!.gameDetailLink,
          })
        );
        break;

      case "Six Nimmt":
        const sixnimmtDoc = doc(gameDb, "sixnimmt");
        const sixnimmtRankingCollection = collection(
          sixnimmtDoc,
          "playerRanking"
        );
        dispatch(gameIndex(2));
        if (sixnimmtData.players.length > 0) {
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const sixnimmtQuerySnapshot = await getDocs(sixnimmtRankingCollection);
        let sixNimmtArrayPlayer: PlayerStats[] = [];
        const sixNimmtSnap = await getDoc(sixnimmtDoc);
        const sixNimmtLink = sixNimmtSnap.data();
        sixnimmtQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            sixNimmtArrayPlayer.push(data);
          }
        });
        sixNimmtArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(
          sixnimmtSave({
            gameName: "sixnimmt",
            players: sixNimmtArrayPlayer,
            gameLinkRef: sixNimmtLink!.gameDetailLink,
          })
        );
        break;

      case "Ticket To Ride":
        const ttrDoc = doc(gameDb, "ttr");
        const ttrRankingCollection = collection(ttrDoc, "playerRanking");
        dispatch(gameIndex(3));
        if (ttrData.players.length > 0) {
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const ttrQuerySnapshot = await getDocs(ttrRankingCollection);
        let ttrArrayPlayer: PlayerStats[] = [];
        const ttrSnap = await getDoc(ttrDoc);
        const ttrLink = ttrSnap.data();
        ttrQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            ttrArrayPlayer.push(data);
          }
        });
        ttrArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(
          ttrSave({
            gameName: "ttr",
            players: ttrArrayPlayer,
            gameLinkRef: ttrLink!.gameDetailLink,
          })
        );
        break;

      case "Sushi Go":
        const sushiGoDoc = doc(gameDb, "sushigo");
        const sushiGoRankingCollection = collection(
          sushiGoDoc,
          "playerRanking"
        );
        dispatch(gameIndex(4));
        if (sushiGoData.players.length > 0) {
          dispatch(isLoading(false));
          dispatch(selectedGame(game));
          return;
        }
        const sushiGoQuerySnapshot = await getDocs(sushiGoRankingCollection);
        let sushiGoArrayPlayer: PlayerStats[] = [];
        const sushiGoSnap = await getDoc(sushiGoDoc);
        const sushiGoLink = sushiGoSnap.data();
        sushiGoQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            sushiGoArrayPlayer.push(data);
          }
        });
        sushiGoArrayPlayer.sort((a, b) => {
          return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
        });
        dispatch(
          sushigoSave({
            gameName: "ttr",
            players: sushiGoArrayPlayer,
            gameLinkRef: sushiGoLink!.gameDetailLink,
          })
        );
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
        className={`toggleDropdown example whitespace-nowrap text-sm absolute top-7 border-2 border-bp-red-500 border-opacity-50 shadow-md rounded-[6px] right-[-5px] flex flex-col bg-bp-pri-500 items-end overflow-auto h-[142px] ${
          !hamburgerMenu ? "menuclose" : ""
        }`}
      >
        {arrOfGames.map((e) => (
          <li
            className="z-10 pl-5 text-[17px] hover:bg-bp-pri-400 font-eczar px-2 py-[6px] w-[100%] text-right border border-b-bp-pri-700 border-t-0 border-x-0 cursor-pointer font-medium text-bp-brown-500"
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

  function backToInit() {
    dispatch(selectedGame(""));
  }

  return (
    <div className="relative flex justify-around px-0 sm:px-[7%] h-20 bg-bp-sec-300 items-center opacity-95 sm:h-16 sm:rounded-b-lg">
      <Image
        onClick={backToInit}
        src={imagetest}
        alt="The Logo"
        className="h-[80px] w-[80px] ml-24 sm:ml-0 sm:mr-3 sm:h-[55px] sm:w-[55px] "
        priority
      />
      <span className="text-bp-sec-900 text-[32px] mt-1 font-eczar">
        LEADERBOARD
      </span>
      <div
        onClick={() => onClickOpenHmbr()}
        className="mr-24 ml-8 sm:ml-4 relative text-bp-sec-900 sm:font-semibold text-[33px] cursor-pointer rounded-full"
      >
        {" "}
        ≡ {dropdown}
      </div>
    </div>
  );
}

export default Header;
