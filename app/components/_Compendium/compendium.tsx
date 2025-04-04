import { RootState, useAppDispatch, useAppSelector } from "@/app/_store/store";
import React from "react";
import Image from "next/image";
import instagram from "../../_assets/_image/instagram.svg";
import rank1 from "../../_assets/_image/champion.png";
import rank2 from "../../_assets/_image/second.png";
import rank3 from "../../_assets/_image/third.png";
import knight from "../../_assets/_image/knight.png";
import { PlayerStats } from "@/app/_type/player";
import { isOpenHmb } from "@/app/_store/headerhamburger";
import Loader from "../loader/loader";
import "./compendium.css";

function Compendium() {
  const kompedium = useAppSelector((state: RootState) => state.gamesRank);
  const arrIdx = useAppSelector((state: RootState) => state.gameIndex);
  const isLoading = useAppSelector((state: RootState) => state.loading);
  const selectedGame = useAppSelector((state: RootState) => state.pickedGame);
  const dispatch = useAppDispatch();

  let belowRankFour: PlayerStats[];
  let rank = 4; //RANK 4 KEBAWAH
  const res = kompedium[arrIdx].players.slice(3);
  belowRankFour = res;

  let initContent = (
    <div
      className="w-screen flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%]"
      onClick={() => {
        dispatch(isOpenHmb(false));
      }}
    >
      <Image
        src={knight}
        alt="Welcome Knight"
        className="sm:scale-90 mt-14 sm:mt-6"
      />
      <div
        className="flex justify-center w-fit cursor-pointer opacity-80 hover:opacity-100"
        onClick={() =>
          window.open("https://www.instagram.com/bpaeroguild/", "_blank")
        }
      >
        <Image src={instagram} alt="instagram" className="ig" />
        <span className="ml-1 text-sm text-bp-pri-600 active:text-purple-500">
          bpaeroguild
        </span>
      </div>
    </div>
  );

  let content = (
    <div className="flex flex-col">
      <div className="mb-1.5 flex relative bg-bp-pri-700 py-0.5">
        <span className="text-white ml-3 mr-5">Rank</span>
        <span className="text-white ml-1">Heroes</span>
        <div className="absolute right-0">
          <span className="text-white sm:right-[120px] mr-12 sm:mr-8">
            Played
          </span>
          <span className="text-white sm:right-[65px] right-[110px] mr-12 sm:mr-8">
            P/G
          </span>
          <span className="text-white right-3 mr-2">Pts</span>
        </div>
      </div>
      {/* 3 BESAR */}
      <div className={`h-96 rounded-lg border-t-0 border-r-0 px-1 `}>
        <div className="flex relative mt-1.5 mb-3.5 bg-bp-pri-50 shadow-[0px_0px_8px_2px_#F8B24B] pr-2 text-bp-pri-700 justify-between rounded-xl h-16 border-2 border-bp-pri-500 items-center">
          <div className="flex items-center">
            <Image src={rank1} alt={"Champion"} className="h-[50px] w-[50px]" />
            <span className="text-xl mt-0.5 ml-4 font-ibm font-semibold whitespace-nowrap">
              {kompedium[arrIdx].players[0]?.playerName} 👑
            </span>
          </div>
          <div className="absolute right-1">
            <span className="text-md mr-[72px] font-ibm sm:mr-[52px] font-semibold">
              {kompedium[arrIdx].players[0]?.playcycle}
            </span>
            <span className="text-md mr-7 font-ibm sm:mr-4 font-semibold">
              {(
                +kompedium[arrIdx].players[0]?.point /
                +kompedium[arrIdx].players[0]?.playcycle
              ).toFixed(2)}
            </span>
            <span
              className={`text-md ml-4 font-ibm font-semibold ${
                kompedium[arrIdx].players[0]?.point.toString().length > 1
                  ? "sm:mr-0 mr-0"
                  : "sm:mr-[7px] mr-1"
              }`}
            >
              {kompedium[arrIdx].players[0]?.point}
            </span>
          </div>
        </div>

        <div className="flex relative mb-2 bg-bp-red-700 shadow-[0px_0px_6px_2px_#93231E] pr-2 justify-between rounded-xl h-16 border-2 border-bp-pri-200 items-center">
          <div className="flex items-center">
            <Image src={rank2} alt={"Champion"} className="h-[50px] w-[50px]" />
            <span className="text-xl mt-0.5 ml-4 font-ibm text-bp-pri-100">
              {kompedium[arrIdx].players[1]?.playerName} ⚔️
            </span>
          </div>
          <div className="absolute right-1">
            <span className="text-md mr-[72px] font-ibm text-bp-sec-50 sm:mr-[52px]">
              {kompedium[arrIdx].players[1]?.playcycle}
            </span>
            <span className="text-md mr-8 font-ibm text-bp-pri-50 sm:mr-5">
              {(
                +kompedium[arrIdx].players[1]?.point /
                +kompedium[arrIdx].players[1]?.playcycle
              ).toFixed(2)}
            </span>
            <span
              className={`text-md ml-4 font-sans font-semibold text-bp-pri-50 ${
                kompedium[arrIdx].players[1]?.point.toString().length > 1
                  ? "sm:mr-0.5"
                  : "sm:mr-[7px] mr-1"
              }`}
            >
              {kompedium[arrIdx].players[1]?.point}
            </span>
          </div>
        </div>

        <div className="flex relative mb-3 bg-bp-sec-800 pr-2 justify-between rounded-xl h-16 border-2 border-bp-pri-100 items-center">
          <div className="flex items-center">
            <Image src={rank3} alt={"Champion"} className="h-[50px] w-[50px]" />
            <span className="text-xl mt-0.5 ml-4 font-ibm text-bp-pri-100">
              {kompedium[arrIdx].players[2]?.playerName}
            </span>
          </div>
          <div className="absolute right-1">
            <span className="text-md mr-[72px] font-ibm text-bp-sec-50 sm:mr-[52px]">
              {kompedium[arrIdx].players[2]?.playcycle}
            </span>
            <span className="text-md mr-8 font-ibm text-bp-pri-50 sm:mr-5">
              {(
                +kompedium[arrIdx].players[2]?.point /
                +kompedium[arrIdx].players[2]?.playcycle
              ).toFixed(2)}
            </span>
            <span
              className={`text-md ml-4 font-sans font-semibold text-bp-pri-50 ${
                kompedium[arrIdx].players[2]?.point.toString().length > 1
                  ? "sm:mr-0.5"
                  : "sm:mr-[7px] mr-1"
              }`}
            >
              {kompedium[arrIdx].players[2]?.point}
            </span>
          </div>
        </div>
        {/* END OF 3 BESAR */}
        <div
          className={`h-[30vh] sm:h-[25vh] overflow-auto hideScrollbar  ${
            belowRankFour.length > 3
              ? "border border-bp-sec-400 rounded-sm px-1 pt-2 pb-1"
              : ""
          }`}
        >
          {belowRankFour.map((e) => (
            <div
              key={e.playerName}
              className="flex mb-2 pr-2 justify-between rounded-xl h-16 border-2 border-bp-sec-300 items-center"
            >
              <div className="flex items-center justify-center">
                <span className="h-[50px] w-[50px] items-center text-white text-lg flex pl-4">
                  {rank++}
                </span>
                <span
                  className={`text-lg mt-0.5 font-ibm text-bp-pri-100 ${
                    belowRankFour.length > 3 ? "ml-3" : "ml-4"
                  }`}
                >
                  {e.playerName}
                </span>
              </div>
              <div>
                <span className="text-md mr-[70px] font-ibm text-bp-sec-50 sm:mr-[52px]">
                  {e.playcycle}
                </span>
                <span className="text-md mr-7 sm:mr-5 font-ibm text-bp-pri-50">
                  {(e.point / e.playcycle).toFixed(2)}
                </span>
                <span
                  className={`text-md ml-4 mr-0.5 font-sans font-semibold text-bp-pri-50 ${
                    kompedium[arrIdx].players[2]?.point.toString().length > 1
                      ? "sm:mr-0.5"
                      : "sm:mr-0 mr-[1px]"
                  }`}
                >
                  {e.point}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <span className="text-white">kompeleng{kompedium.length}</span> */}
      </div>
    </div>
  );

  function konsolin() {
    dispatch(isOpenHmb(false));
  }

  return (
    <div
      onClick={konsolin}
      className="flex justify-center relative sm:px-1.5 flex-col px-24 sm:w-[100%]"
    >
      {isLoading ? <Loader /> : ""}
      {kompedium[arrIdx].players.length > 0 && !isLoading && selectedGame
        ? content
        : initContent}
    </div>
  );
}

export default Compendium;
