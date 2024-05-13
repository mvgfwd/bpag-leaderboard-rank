"use client";
import Test from "@/pages/indexx";
import Loader from "./components/loader/loader";
import Layout from "./components/_Layout/layoutoutlet";
import { Provider } from "react-redux";
import { store } from "./_store/store";
import ReduxProvider from "./_store/reduxProvider";
import Compendium from "./components/_Compendium/compendium";
import PickedGame from "./components/_Compendium/gametitle";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="h-[100vh]">
        <Layout>
          <PickedGame></PickedGame>
          <Compendium></Compendium>
        </Layout>
      </div>
    </ReduxProvider>
  );
}
