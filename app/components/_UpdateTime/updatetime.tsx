import React, { useState } from "react";
import { collection, getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UpdateTimeDTO } from "@/app/_type/boardgame";

function UpdateTime() {
  const timeDb = collection(db, "update-time");
  const [nextUpdate, setNextUpdate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  async function initThis() {
    const timeDoc = doc(timeDb, "time_date");
    const timeSnap = await getDoc(timeDoc);
    const timeData: UpdateTimeDTO | undefined | DocumentData = timeSnap.data();
    setNextUpdate(timeData?.next_update_date);
    setUpdatedDate(timeData?.updated_date);
  }

  initThis();

  return (
    <div className="flex flex-col items-center text-xs text-bp-sec-300 mt-3 mb-2">
      <span>Last Updated: {updatedDate}</span>
      <span>Next Update: {nextUpdate} </span>
    </div>
  );
}

export default UpdateTime;
