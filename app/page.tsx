"use client";
// import Test from "@/pages/indexx";
import Layout from "./components/_Layout/layoutoutlet";
import ReduxProvider from "./_store/reduxProvider";
import Compendium from "./components/_Compendium/compendium";
import PickedGame from "./components/_Compendium/gametitle";
import TermCondition from "./components/_TermCondition/termcondition";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="h-[100vh]">
        <Layout>
          <PickedGame></PickedGame>
          <Compendium></Compendium>
          <TermCondition />
        </Layout>
      </div>
    </ReduxProvider>
  );
}
