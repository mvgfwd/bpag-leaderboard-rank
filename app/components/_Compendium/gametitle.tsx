import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "@/app/_store/store";
import { useDispatch } from "react-redux";
import { isOpenHmb } from "@/app/_store/headerhamburger";

export default function PickedGame() {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.pickedGame);
  return (
    <div
      className="flex justify-center pt-6"
      onClick={() => dispatch(isOpenHmb(false))}
    >
      <div className="font-eczar text-xl text-bp-sec-50 mb-6 mt-3">
        {game ? (
          <span className="flex text-[40px] mb-6 font-ibm text-bp-pri-50 mt-0">
            {game}
          </span>
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
