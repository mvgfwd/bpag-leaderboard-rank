import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "@/app/_store/store";
import { useDispatch } from "react-redux";
import { isOpenHmb } from "@/app/_store/headerhamburger";
import UpdateTime from "../_UpdateTime/updatetime";

export default function PickedGame() {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.pickedGame);
  const gameIndex = useSelector((state: RootState) => state.gameIndex);
  const loading = useSelector((state: RootState) => state.loading);
  const linkDet = useSelector(
    (state: RootState) => state.gamesRank[gameIndex].gameLinkRef
  );

  const openLink = () => {
    window.open(linkDet, "_blank");
  };

  return (
    <div
      className="flex justify-center sm:mt-4 sm:pt-0 pt-6"
      onClick={() => dispatch(isOpenHmb(false))}
    >
      <div className="font-eczar text-xl text-bp-sec-50 mb-2">
        {game ? (
          <div className="flex flex-col sm:text-[36px] text-[44px] font-ibm text-bp-pri-50 mt-0">
            <span className="text-center font-ibm font-semibold text-bp-pri-100">
              {loading ? "..." : game}
            </span>
            <span
              onClick={openLink}
              className="text-sm text-bp-sec-300 text-center sm:mt-2 mt-4 hover:cursor-pointer"
            >
              find game-detail ↗
            </span>
            <UpdateTime></UpdateTime>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4 font-eczar text-lg sm:text-xl font-normal">
            <span className="mb-1 font-ibm text-lg">
              Welcome to{" "}
              <span className="text-bp-pri-500 font-semibold">BPAG</span>{" "}
              Leaderboard!
            </span>
            <span className="text-bp-pri-50">
              Pick a game in Header, Heroes!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
