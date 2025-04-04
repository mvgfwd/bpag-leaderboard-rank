import React from "react";
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
import { PlayerRank, PlayerStats } from "@/app/_type/player";
import { db } from "@/firebase/firebase";
import {
  coupSave,
  loveletterSave,
  sixnimmtSave,
  sushigoSave,
  ttrSave,
  saboteurSave,
  splendorSave,
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

function Header() {
  const dispatch = useAppDispatch();
  const coupData = useAppSelector((state: RootState) => state.gamesRank[0]);
  const llData = useAppSelector((state: RootState) => state.gamesRank[1]);
  const sixnimmtData = useAppSelector((state: RootState) => state.gamesRank[2]);
  const ttrData = useAppSelector((state: RootState) => state.gamesRank[3]);
  const sushiGoData = useAppSelector((state: RootState) => state.gamesRank[4]);
  const saboteurData = useAppSelector((state: RootState) => state.gamesRank[5]);
  const splendorData = useAppSelector((state: RootState) => state.gamesRank[6]);
  const hamburgerMenu = useAppSelector((state: RootState) => state.hamburger);
  const gameDb = collection(db, "games");

  let dropdown;
  const arrOfGames: string[] = [
    "Coup",
    "Love Letter",
    "Six Nimmt",
    "Ticket To Ride",
    "Sushi Go",
    "Saboteur",
    "Splendor",
  ];

  async function pickedGame(game: string) {
    dispatch(isOpenHmb(false));
    dispatch(isLoading(true));
    switch (game) {
      case "Coup":
        const coupDoc = doc(gameDb, "coup");
        const coupRankingCollection = collection(coupDoc, "playerRanking");
        playerRankCheck(coupData, game, 0);
        if (coupData.players.length > 0) return;
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
        sortRankingArray(coupArrayPlayer);
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
        playerRankCheck(llData, game, 1);
        if (llData.players.length > 0) return;
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
        sortRankingArray(llArrayPlayer);
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
        playerRankCheck(sixnimmtData, game, 2);
        if (sixnimmtData.players.length > 0) return;
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
        sortRankingArray(sixNimmtArrayPlayer);
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
        playerRankCheck(ttrData, game, 3);
        if (ttrData.players.length > 0) return;
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
        sortRankingArray(ttrArrayPlayer);
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
        playerRankCheck(sushiGoData, game, 4);
        if (sushiGoData.players.length > 0) return;
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
        sortRankingArray(sushiGoArrayPlayer);
        dispatch(
          sushigoSave({
            gameName: "sushigo",
            players: sushiGoArrayPlayer,
            gameLinkRef: sushiGoLink!.gameDetailLink,
          })
        );
        break;

      case "Saboteur":
        const saboteurDoc = doc(gameDb, "saboteur");
        const saboteurRankingCollection = collection(
          saboteurDoc,
          "playerRanking"
        );
        playerRankCheck(saboteurData, game, 5);
        if (saboteurData.players.length > 0) return;
        const saboteurQuerySnapshot = await getDocs(saboteurRankingCollection);
        let saboteurArrayPlayer: PlayerStats[] = [];
        const saboteurSnap = await getDoc(saboteurDoc);
        const saboteurLink = saboteurSnap.data();
        saboteurQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            saboteurArrayPlayer.push(data);
          }
        });
        sortRankingArray(saboteurArrayPlayer);
        dispatch(
          saboteurSave({
            gameName: "saboteur",
            players: saboteurArrayPlayer,
            gameLinkRef: saboteurLink!.gameDetailLink,
          })
        );
        break;

      case "Splendor":
        const splendorDoc = doc(gameDb, "splendor");
        const splendorRankingCollection = collection(
          splendorDoc,
          "playerRanking"
        );
        playerRankCheck(splendorData, game, 6);
        if (splendorData.players.length > 0) return;
        const splendorQuerySnapshot = await getDocs(splendorRankingCollection);
        let splendorArrayPlayer: PlayerStats[] = [];
        const splendorSnap = await getDoc(splendorDoc);
        const splendorLink = splendorSnap.data();
        splendorQuerySnapshot.forEach((doc) => {
          if (doc) {
            const data: any = doc.data();
            splendorArrayPlayer.push(data);
          }
        });
        sortRankingArray(splendorArrayPlayer);
        dispatch(
          splendorSave({
            gameName: "saboteur",
            players: splendorArrayPlayer,
            gameLinkRef: splendorLink!.gameDetailLink,
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
        className={`toggleDropdown example whitespace-nowrap text-sm absolute top-14 sm:top-9 border-2 border-bp-red-500 border-opacity-50 shadow-md rounded-[6px] right-[-5px] flex flex-col bg-bp-pri-500 items-end overflow-auto h-[142px] ${
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

  function sortRankingArray(arr: PlayerStats[]): PlayerStats[] {
    arr.sort((a, b) => {
      if (a.point === b.point) {
        return a.point / a.playcycle < b.point / b.playcycle
          ? 1
          : b.point / b.playcycle < a.point / a.playcycle
          ? -1
          : 0;
      } else {
        return a.point < b.point ? 1 : b.point < a.point ? -1 : 0;
      }
    });
    return arr;
  }

  function playerRankCheck(
    arrPlayerRank: PlayerRank,
    game: string,
    gameIdx: number
  ) {
    dispatch(gameIndex(gameIdx));
    if (arrPlayerRank.players.length > 0) {
      dispatch(isLoading(false));
      dispatch(selectedGame(game));
    }
  }

  return (
    <div className="sticky left-0 right-0 top-0 flex justify-between sm:px-4 px-24 h-20 bg-bp-sec-300 items-center opacity-95 sm:h-16 sm:rounded-b-md">
      <Image
        onClick={backToInit}
        src={imagetest}
        alt="The Logo"
        className="h-[80px] w-[80px] hover:scale-105 duration-150 sm:h-[55px] sm:w-[55px] cursor-pointer"
        priority
      />
      <span className="text-bp-sec-900 text-[32px] mt-1 font-eczar">
        LEADERBOARD
      </span>
      <div
        onClick={() => onClickOpenHmbr()}
        className="relative h-[80px] w-[80px] sm:w-fit sm:h-fit flex items-center justify-end sm:font-semibold text-[24px] sm:text-[20px] font-bold cursor-pointer"
      >
        <span
          className={`hover:text-bp-sec-700 duration-150 ${
            hamburgerMenu
              ? "rotate-90 text-bp-pri-500 hover:text-bp-pri-500"
              : "rotate-0 text-bp-sec-900"
          }`}
        >
          &#9776;
        </span>
        {dropdown}
      </div>
    </div>
  );
}

export default Header;
