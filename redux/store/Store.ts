import { configureStore } from "@reduxjs/toolkit";
import { DarkmodeSlice } from "../reducer/Darkmode";
import { DropdownSlice } from "../reducer/Dashboard";
import { LoadingSlice } from "../reducer/Loading";

export const store = configureStore({
  reducer: {
    darkmode: DarkmodeSlice.reducer,
    dropdown: DropdownSlice.reducer,
    loading: LoadingSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
