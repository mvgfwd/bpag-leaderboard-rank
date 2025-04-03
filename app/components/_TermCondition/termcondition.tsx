import React from "react";
import Modal from "../modal/modal";
import { RootState, useAppSelector } from "@/app/_store/store";
import styles from "./termcondition.module.css";

function TermCondition() {
  const isTcShown = useAppSelector((state: RootState) => state.tc);

  const konten = (
    <div className="flex flex-col font-ibm text-bp-brown-800 text-md">
      <span className="mb-1">
        1. Player need to play at least 1 times at ranked mode on certain game.
      </span>
      <span className="mb-1">
        2. Ranked mode requires all consent of players playing.
      </span>
      <span className="mb-1">
        3. Score recorded & reported by any player or administator and
        supervised by all to uphold transparency.
      </span>
      <span className="mb-1">4. Ranking sorted by point.</span>
      <span className="mb-1">
        5. If 2 or more player have same point, ranking sorted by P/G.
      </span>
      <span className="mb-1">
        6. If player(s) proven cheating, player's points are not counted.
      </span>
      <span className="mb-1">
        7. Any change of ranking data, 'Last Updated' data will be updated
      </span>
      <span className="mb-1">
        8. Leaderboard ranking will be updated peridiocally.
      </span>
      <span>
        9. Point distribution differ depending on how many players are playing.
        Point distribution can be{" "}
        <span
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1JVnimhBJyYrL1tkN3InrBzFwI8qmnYtc/view?usp=sharing",
              "_blank"
            )
          }
          className="italic underline text-bp-sec-600 active:text-bp-sec-500"
        >
          accessed here
        </span>
      </span>
    </div>
  );

  return (
    <div className={`${styles.popup} ${isTcShown ? styles.show : styles.hide}`}>
      {isTcShown && (
        <Modal
          backdropStyle={`${styles.show}`}
          contentStyle={`${styles.popupContent}`}
          title="Terms & Conditions"
          content={konten}
        />
      )}
    </div>
  );
}

export default TermCondition;
