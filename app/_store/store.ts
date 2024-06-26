import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import gamesSlices from "./slicer";
import gameIndexSlice from "./arridx";
import hamburgerSlice from "./headerhamburger";
import pickedGameSlice from "./pickedgame";
import loadingSlice from "./isloading";
import detailGameLinkSlice from "./detaillink";
import tcSlice from "./tcmodal";

export const store = configureStore({
  reducer: {
    gamesRank: gamesSlices,
    gameIndex: gameIndexSlice,
    hamburger: hamburgerSlice,
    pickedGame: pickedGameSlice,
    loading: loadingSlice,
    detailLink: detailGameLinkSlice,
    tc: tcSlice,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
